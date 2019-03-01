import { Command, flags } from '@oclif/command'
import { node as kirinuki } from 'kirinuki';
import fetch from 'isomorphic-fetch';

export default class Scrape extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ kirinuki scrape -url https://google.com '{ image: "img" }'
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'url',               // name of arg to show in help and reference with args[name]
    required: true,            // make the arg required with `required: true`
    description: 'scrape target url', // help description
  }, {
    name: 'scheme',
    required: true,
    description: 'scrape scheme', // help description
  }]

  async run() {
    const {args, flags} = this.parse(Scrape)
    const scheme = JSON.parse(args.scheme)
    const url = args.url
    const response = await fetch(url)

    if(response.status == 200) {
      kirinuki(scheme, response.body)
    }

    kirinuki()
  }
}
