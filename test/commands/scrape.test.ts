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
  const schema = {
    title: "h1",
    topic: ["p a", "text"]
  };
  test
    .stdout()
    .command([
      "scrape",
      "-p",
      "-T 5000",
      "https://example.com/",
      JSON.stringify(schema)
    ])
    .it("scrape html", ctx => {
      expect(ctx.stdout).to.contain("Example Domain");
      expect(ctx.stdout).to.contain("More information...");
    });
});
