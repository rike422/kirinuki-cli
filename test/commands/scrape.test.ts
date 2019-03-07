import { expect, test } from "@oclif/test";
import { mock as fetchMock } from "fetch-mock";
import { heroNews } from "../fixtures/fixture_test";
import * as nock from "nock";

describe("scrape", () => {
  nock("https://rike422.com")
    .get("/")
    .reply(200, heroNews);
  const schema = {
    title: "title",
    topic: ".news-list .content"
  };
  test
    .stdout()
    .command(["scrape", "https://rike422.com", JSON.stringify(schema)])
    .it("scrape html", ctx => {
      expect(ctx.stdout).to.contain("Hero News!");
      expect(ctx.stdout).to.contain("Batman come back in Gossam City!");
    });
});

describe("scrape with puppeteer", () => {
  nock("https://qiita.com/")
    .get("/rike422")
  const schema = {
    title: "title",
    topic: ".news-list .content"
  };
  test
    .stdout()
    .command(["scrape", '-p', "https://qiita.com/", JSON.stringify(schema)])
    .it("scrape html", ctx => {
      expect(ctx.stdout).to.contain("Hero News!");
      expect(ctx.stdout).to.contain("Batman come back in Gossam City!");
    });
});
