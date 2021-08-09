import { createTemplate, loadConfig, loadData } from '../../assets'
import nodemon = require('nodemon')
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

    // === Execution ===
    const { exec, ext } =
      compiler === 'js'
        ? {
          exec: 'node',
          ext: 'js,mjs,txt'
        }
        : {
          exec: 'ts-node',
          ext: 'ts,txt'
        }

    nodemon({
      script: 'node_modules/aoct/dist/lib/run.js',
      watch: ['data', 'src'],
      exec,
      ext
    }).on('start', () => {
      console.log(' ')
    }).on('restart', () => {
      console.clear()
    })
  } catch (error) {
    spinner.fail()
    console.error(error)
  }
}
