#!/usr/bin/env node
import yargs = require('yargs/yargs')
import start from '../components/start'

yargs(process.argv.slice(2))
  .scriptName('aoct')
  .command('start <day>', 'Executes given day', yargs => {
    yargs.positional('day', {
      type: 'string'
    })
  },
  (argv) => {
    // @ts-ignore
    start(argv.day)
  })
  .help().argv
