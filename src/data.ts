import { readFileSync } from 'fs'
import getConfig from './config'
const config = getConfig()

const read = (path: string): Array<string> => {
  return readFileSync(path).toString().split(/\r?\n/)
}

const input = (): Array<string> => {
  if (config.local) {
    return read(`./data/${config.year}/${process.env.DAY}/input.txt`)
  }
}
const test = () => {}

export { input, test }
