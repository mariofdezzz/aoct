import { spawn } from 'child_process'
import { fetchData, getConfig, readData, writeData } from './components'
import { generateTemplate, loadData } from './start/'

const ora = require('ora')

export default async (day: string) => {
  process.env.DAY = day

  const spinner = ora()
  spinner.start('Preparing files')

  const config = getConfig()
  const { year, compiler } = config

  try {
    process.env.CONFIG = JSON.stringify(config)

    await generateTemplate()

    spinner.succeed()

    await loadData(spinner)

    spawn(
      'npx',
      ['nodemon', '--quiet', `./src/${year}/${process.env.DAY}.${compiler}`],
      {
        shell: true,
        stdio: 'inherit'
      }
    )
  } catch (error) {
    spinner.fail()
    console.error(error)
  }
}
