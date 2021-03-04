import { mkdirSync, existsSync, copyFileSync } from 'fs'
import { resolve } from 'path'
import { spawn } from 'child_process'
import getConfig from './config'
const { compiler, year } = getConfig()

export default (day: string) => {
  process.env.DAY = day

  mkdirSync(`./src/${year}`, { recursive: true })

  if (!existsSync(`./src/${year}/${day}.${compiler}`))
    copyFileSync(
      resolve(__dirname, `../templates/index.${compiler}`),
      `./src/${year}/${day}.${compiler}`
    )

  spawn('npx', ['nodemon', '--quiet', `./src/${year}/${day}.${compiler}`], {
    shell: true,
    stdio: 'inherit'
  })
}
