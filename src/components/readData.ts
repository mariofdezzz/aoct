import { constants } from 'fs'
import { access, readFile } from 'fs/promises'

const { F_OK } = constants

export default async (file: string): Promise<Array<string>> => {
  let config = JSON.parse(process.env.CONFIG)
  const path = `./data/${config.year}/${process.env.DAY}/${file}`

  try {
    await access(path, F_OK)
    const buffer = await readFile(path)

    return buffer.toString().split(/\r?\n/)
  } catch (err) {
    throw new Error("Couldn't read data")
  }
}
