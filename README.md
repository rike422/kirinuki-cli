kirinuki-cli
============

Convert any html to JSON using CSS selectors.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/kirinuki-cli.svg)](https://npmjs.org/package/kirinuki-cli)
[![Downloads/week](https://img.shields.io/npm/dw/kirinuki-cli.svg)](https://npmjs.org/package/kirinuki-cli)
[![License](https://img.shields.io/npm/l/kirinuki-cli.svg)](https://github.com/rike422/kirinuki-cli/blob/master/package.json)

# Sample

```bash
jo -B topics="$(jo -B title="$(jo -a .storylink text)" link=.storylink _unfold=true )" | xargs -0 kirinuki scrape https://news.ycombinator.com/ | jq .`
```

![gif](https://raw.githubusercontent.com/rike422/kirinuki-cli/master/assets/sample.gif)


<!-- toc -->
* [Sample](#sample)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g kirinuki-cli
$ kirinuki COMMAND
running command...
$ kirinuki (-v|--version|version)
kirinuki-cli/0.0.1 darwin-x64 node-v8.9.4
$ kirinuki --help [COMMAND]
USAGE
  $ kirinuki COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kirinuki help [COMMAND]`](#kirinuki-help-command)
* [`kirinuki scrape URL SCHEMA`](#kirinuki-scrape-url-schema)

## `kirinuki help [COMMAND]`

display help for kirinuki

```
USAGE
  $ kirinuki help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `kirinuki scrape URL SCHEMA`

Scrape website by kirinuki-schema(https://github.com/rike422/kirinuki-core)

```
USAGE
  $ kirinuki scrape URL SCHEMA

ARGUMENTS
  URL     scrape target url
  SCHEMA  scrape rules, please refer to https://github.com/rike422/kirinuki-core

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/scrape.ts](https://github.com/rike422/kirinuki-cli/blob/v0.0.1/src/commands/scrape.ts)_
<!-- commandsstop -->
