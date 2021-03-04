import { existsSync, readFileSync } from 'fs'
import getConfig from './config'
const config = getConfig()

const read = (path: string): Array<string> => {
  if (existsSync(path)) return readFileSync(path).toString().split(/\r?\n/)
  else return ['']
}

const input = (): Array<string> => {
  if (config.local) {
    return read(`./data/${config.year}/${process.env.DAY}/input.txt`)
  }
}
const test = () => {
  if (config.local) {
    return read(`./data/${config.year}/${process.env.DAY}/test.txt`)
  }
}

export { input, test }
