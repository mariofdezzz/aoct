import { spawn } from 'child_process'
import { createTemplate, loadConfig, loadData } from '../../assets'

import ora = require('ora')

export default async (day: string): Promise<void> => {
  process.env.DAY = day

  const spinner = ora()
  spinner.start('Preparing files')

  const config = loadConfig()
  const { compiler } = config

  try {
    process.env.CONFIG = JSON.stringify(config)

    await createTemplate()

    spinner.succeed()

    await loadData(spinner)

    /**
     * Preformance: ts-node is slower than node on execution
     */
    if (compiler === 'js') {
      spawn('npx',
        [
          'nodemon',
          '--quiet',
          '--watch src',
          '--watch data',
          '-e js,mjs,txt',
          '--exec "node ./node_modules/aoct/dist/lib/run.js"'
        ], {
          shell: true,
          stdio: 'inherit'
        })
    } else {
      spawn('npx',
        [
          'nodemon',
          '--quiet',
          '--watch src',
          '-e ts,txt',
          '--exec "ts-node ./node_modules/aoct/dist/lib/run.js"'
        ], {
          shell: true,
          stdio: 'inherit'
        })
    }
  } catch (error) {
    spinner.fail()
    console.error(error)
  }
}
