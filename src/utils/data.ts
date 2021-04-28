import { constants } from 'fs'
import { access, readFile, mkdir, writeFile } from 'fs/promises'
import fetch from 'node-fetch'

const { F_OK } = constants
let config

const read = async (path: string, file: string): Promise<Array<string>> => {
  try {
    // --- Local data ---
    await access(path + file, F_OK)
    const buff = await readFile(path + file)

    return buff.toString().split(/\r?\n/)
  } catch (err) {
    // --- Fetch data ---
    try {
      const response: Response = await fetch(
        `${process.env.REPO}/${config.year}/${process.env.DAY}/${file}`
      )

      if (response.ok) {
        let text: string = await response.text()

        // Make it an option? config file
        // await mkdir(`./data/${config.year}/${process.env.DAY}`, {
        //   recursive: true
        // })
        // await writeFile(path + file, text)

        return text.split(/\r?\n/)
      } else {
        // Should this error stop the program? it does not!
        throw new Error('Could not find data locally or in the cloud.')
      }
    } catch (error) {
      console.error(error)
    }
  }
  return []
}

// Pending return type!!
export default async () => {
  config = JSON.parse(process.env.CONFIG)

  const path = `./data/${config.year}/${process.env.DAY}/`

  const input: Array<string> = await read(path, 'input.txt')
  const test: Array<string> = await read(path, 'test.txt')

  return {
    input,
    test
  }
}
