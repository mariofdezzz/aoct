import { mkdirSync, existsSync, copyFileSync } from 'fs'
import { resolve } from 'path'
import { spawn } from 'child_process'
import getConfig from './config'
const { year } = getConfig()

export default (day: string) => {
  process.env.DAY = day.substring(3) + ''

  mkdirSync(`./src/${year}`, { recursive: true })

  if (!existsSync(`./src/${year}/${day}.js`))
    copyFileSync(
      resolve(__dirname, '../templates/index.js'),
      `./src/${year}/${day}.js`
    )

  spawn('npx', ['nodemon', '--quiet', `./src/${year}/${day}.js`], {
    shell: true,
    stdio: 'inherit'
  })
}
