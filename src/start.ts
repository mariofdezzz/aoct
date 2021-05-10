import { constants } from 'fs'
import { mkdir, access, copyFile } from 'fs/promises'
import { resolve } from 'path'
import { spawn } from 'child_process'
import { fetchData, getConfig, readData } from './components'

const ora = require('ora')
const { F_OK } = constants

export default async (day: string) => {
  process.env.DAY = day

  const spinner = ora()
  spinner.start('Preparing files')

  const config = getConfig()
  const { year, compiler } = config

  try {
    process.env.CONFIG = JSON.stringify(config)

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

    try {
      let data = await readData('input.txt')
      process.env.INPUT = JSON.stringify(data)
    } catch (error) {
      try {
        let data = await fetchData()
        process.env.INPUT = JSON.stringify(data)
      } catch (error) {
        spinner.fail("Couldn't load input")
        process.env.INPUT = JSON.stringify([])
        spinner.start('Loading data')
      }
    }
    try {
      let data = await readData('test.txt')
      process.env.TEST = JSON.stringify(data)
    } catch (error) {
      spinner.fail("Couldn't load test")
      process.env.TEST = JSON.stringify([])
      spinner.start('Loading data')
    }
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
