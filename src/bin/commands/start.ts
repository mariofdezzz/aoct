import { spawn } from 'child_process'
import { createTemplate, loadConfig, loadData } from '../../assets'

const ora = require('ora')

export default async (day: string) => {
  process.env.DAY = day

  const spinner = ora()
  spinner.start('Preparing files')

  const config = loadConfig()
  const { year, compiler } = config

  try {
    process.env.CONFIG = JSON.stringify(config)

    await createTemplate()

    spinner.succeed()

    await loadData(spinner)

    spawn('npx', ['nodemon', '--quiet', `./src/${year}/${day}.${compiler}`], {
      shell: true,
      stdio: 'inherit'
    })
  } catch (error) {
    spinner.fail()
    console.error(error)
  }
}
