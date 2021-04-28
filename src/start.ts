import { constants } from 'fs'
import { mkdir, access, copyFile } from 'fs/promises'
import { resolve } from 'path'
import { spawn } from 'child_process'
import getConfig from './config'
import data from './data'
const ora = require('ora')
const { compiler, year } = getConfig()
const { F_OK } = constants

export default async (day: string) => {
  process.env.REPO =
    'https://raw.githubusercontent.com/mariofdezzz/advent-of-code/main/src'
  process.env.DAY = day

  const spinner = ora()
  spinner.start('Preparing files')

  try {
    await mkdir(`./src/${year}`, { recursive: true })

    try {
      await access(`./src/${year}/${day}.${compiler}`, F_OK)
    } catch (error) {
      await copyFile(
        resolve(__dirname, `../templates/index.${compiler}`),
        `./src/${year}/${day}.${compiler}`
      )
    }
    spinner.succeed()
    spinner.start('Loading data')
    const { input, test } = await data()

    process.env.INPUT = JSON.stringify(input)
    process.env.TEST = JSON.stringify(test)
    spinner.succeed()

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
