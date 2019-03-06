import { Command, flags } from "@oclif/command";
import "isomorphic-fetch";
import { node as kirinuki } from "kirinuki-core";
import { URL } from "url";

export default class Scrape extends Command {
  static description =
    "Scrape website by kirinuki-schema(https://github.com/rike422/kirinuki-core) ";
  
  static flags = {
    help: flags.help({ char: "h" })
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
    const { args } = this.parse(Scrape);
    const url: string = args.url;
    const schema: any = args.schema;
    const response = await this.fetch(url);
    
    if (response === undefined) {
      this.exit();
      return;
    }
    
    const context = {
      origin: this.getOrigin(url)
    }
    

    
    const body = await response.text();
    
    if (response.status == 200) {
      const result: object = kirinuki(schema, body, context);
      this.log(JSON.stringify(result));
    } else {
      this.warn(`${url} status: ${response.status}`);
      this.warn(body);
    }
  }
  
  private async fetch(url: string): Promise<Response | undefined> {
    try {
      return await fetch(url);
    } catch (e) {
      this.error(e.message);
      this.exit();
    }
  }
  
  private getOrigin(str: string): string {
    return new URL(str).origin
  }
}
