#!/usr/bin/env node
import yargs = require('yargs/yargs')
import start from './start'

const argv = yargs(process.argv.slice(2))
  .command('start <day>', 'Executes given day', yargs => {
    yargs.positional('day', {
      type: 'string'
    })
  })
  .help().argv

if ('day' in argv) {
  // @ts-ignore
  start(argv.day)
}
