import { Command, flags } from "@oclif/command";
import "isomorphic-fetch";
import { scrape as scrapeByCheerio } from '../scraper/node';
import { PuppeteerOption, scrape as scrapeByPuppeteer } from '../scraper/puppeteer';

export default class Scrape extends Command {
  static description =
    "Scrape website by kirinuki-schema(https://github.com/rike422/kirinuki-core) ";

  static flags = {
    help: flags.help({ char: "h" }),
    puppeteer: flags.boolean({
      char: "p",
      description: 'Scrape with puppeteer',
      default: false,
      required: false,
    }),
    chrome: flags.string({
      char: "C",
      description: 'Executable chrome path when use already installed Chrome',
      default: undefined,
      required: false,
      dependsOn: ['puppeteer']
    })
  };

  static args = [
    {
      name: "url",
      required: true,
      description: "scrape target url" // help description
    },
    {
      name: "schema",
      required: true,
      parse: (str: string) => {
        return JSON.parse(str);
      },
      description:
        "scrape rules, please refer to https://github.com/rike422/kirinuki-core"
    }
  ];

  async run() {
    const { args, flags } = this.parse(Scrape);
    const url: string = args.url;
    const schema: any = args.schema;

    if (flags.puppeteer) {
      const func = scrapeByPuppeteer.bind(this)
      const opttion: PuppeteerOption = {}
      if (flags.chrome != null) {
        opttion.chromePath = flags.chrome
      }
      await func(schema, url, opttion)
    } else {
      const func = scrapeByCheerio.bind(this)
      await func(schema, url)
    }
  }

}
