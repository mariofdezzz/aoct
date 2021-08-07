#!/usr/bin/env node
import yargs = require('yargs/yargs')
import { start } from './commands'

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
yargs(process.argv.slice(2))
  .scriptName('aoct')
  .command('start <day>', 'Executes given day', yargs => {
    yargs.positional('day', {
      type: 'string'
    })
  },
  (argv) => {
    // @ts-expect-error
    start(argv.day)
      .catch(e => {
        console.error(e)
      })
  })
  .help().argv
