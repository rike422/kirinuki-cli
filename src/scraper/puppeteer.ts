import "isomorphic-fetch";
import { Command } from "@oclif/command";
import { node as kirinuki } from "kirinuki-core";
import * as fs from "fs";
import * as path from "path";

export type PuppeteerOption = {
  chromePath?: string;
  timeout?: number;
};

export async function scrape(
  this: Command,
  schema: object,
  url: string,
  option: PuppeteerOption
) {
  let browser;
  const handlePuppeteerError = (e: Error) => {
    this.warn(`
    Cannot find module puppeteer
    - install puppeteer: 'npm install --save puppeteer' or 'yarn add puppeteer'
    - If you want use already installed Chrome ex: kirinuki scrape -p -C { Chromium absolute path }
    `);
    this.exit();
  };
  if ("chromePath" in option && option.chromePath != undefined) {
    if (!fs.existsSync(option.chromePath)) {
      this.error(`No Chrome found: '${option.chromePath}'`);
      this.exit();
    }
    browser = await launchLocalBrowser(option.chromePath).catch(
      handlePuppeteerError
    );
  } else {
    browser = await launchBrowser().catch(handlePuppeteerError);
  }

  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle2", timeout: option.timeout });
  await page.addScriptTag({ path: kirinukiStandalonePath() });

  /* istanbul ignore next */
  const result = await page.evaluate((str: string) => {
    return (<any>window).kirinuki(str);
  }, schema);
  await browser.close();
  this.log(JSON.stringify(result));

  return;
}

function kirinukiStandalonePath() {
  return path.join(
    path.dirname(require.resolve("kirinuki-core")),
    "kirinuki.standalone.js"
  );
}

async function launchBrowser() {
  if (require("puppeteer") == null) {
    throw "Can't read puppeteer";
  }

  const puppeteer = require("puppeteer");
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  });
  return browser;
}

async function launchLocalBrowser(path: string) {
  const puppeteer = require("puppeteer-core");
  const browser = await puppeteer.launch({
    executablePath: path,
    headless: false
  });
  return browser;
}
