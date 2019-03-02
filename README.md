kirinuki-cli
============

Convert any html to JSON using CSS selectors.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/kirinuki-cli.svg)](https://npmjs.org/package/kirinuki-cli)
[![Downloads/week](https://img.shields.io/npm/dw/kirinuki-cli.svg)](https://npmjs.org/package/kirinuki-cli)
[![License](https://img.shields.io/npm/l/kirinuki-cli.svg)](https://github.com/rike422/kirinuki-cli/blob/master/package.json)

<!-- toc -->
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
kirinuki-cli/0.0.0 darwin-x64 node-v10.8.0
$ kirinuki --help [COMMAND]
USAGE
  $ kirinuki COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`kirinuki hello [FILE]`](#kirinuki-hello-file)
* [`kirinuki help [COMMAND]`](#kirinuki-help-command)
* [`kirinuki scrape [FILE]`](#kirinuki-scrape-file)

## `kirinuki hello [FILE]`

describe the command here

```
USAGE
  $ kirinuki hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ kirinuki hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/rike422/kirinuki-cli/blob/v0.0.0/src/commands/hello.ts)_

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

## `kirinuki scrape [FILE]`

describe the command here

```
USAGE
  $ kirinuki scrape [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/scrape.ts](https://github.com/rike422/kirinuki-cli/blob/v0.0.0/src/commands/scrape.ts)_
<!-- commandsstop -->
