import { constants } from 'fs'
import { access, readFile } from 'fs/promises'

const { F_OK } = constants

export default async (file: string): Promise<string[]> => {
  const { year }: {year: string} = JSON.parse(
    process.env.CONFIG ?? '{"year":2015}'
  )
  const day = process.env.DAY ?? 'day1'
  const path = `./data/${year}/${day}/${file}`

  try {
    await access(path, F_OK)
    const buffer = await readFile(path)

    return buffer.toString().split(/\r?\n/)
  } catch (err) {
    throw new Error("Couldn't read data")
  }
}
