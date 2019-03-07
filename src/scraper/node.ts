import { Command } from "@oclif/command";
import { node as kirinuki } from 'kirinuki-core';
import { URL } from 'url';
import {ISchema} from "kirinuki-core/lib/types";

export async function scrape(this: Command, schema: ISchema, url: string) {
  let response;
  try {
    response = await fetch(url);
  } catch (e) {
    this.error(e.message);
    this.exit();
  }

  if (response === undefined) {
    this.exit();
    return;
  }

  const context = {
    origin: getOrigin(url)
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


function getOrigin(str: string): string {
  return new URL(str).origin
}
