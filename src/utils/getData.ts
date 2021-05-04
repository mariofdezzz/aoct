import { constants } from 'fs'
import { access, readFile, mkdir, writeFile } from 'fs/promises'
import fetch from 'node-fetch'

const { F_OK } = constants
let config

const retrieve = async (path: string, file: string): Promise<Array<string>> => {
  const day = process.env.DAY.match(/\d+/)
  let response: Response

  try {
    // --- Local data ---
    await access(path + file, F_OK)
    const buff = await readFile(path + file)

    return buff.toString().split(/\r?\n/)
  } catch (err) {
    // --- Fetch data ---
    try {
      response = await fetch(
        `${process.env.REPO}/${config.year}/${day}/${file}`
      )

      if (response.ok) {
        let text: string = await response.text()

        // Make it an option? config file
        // await mkdir(`./data/${config.year}/${process.env.DAY}`, {
        //   recursive: true
        // })
        // await writeFile(path + file, text)

        return text.split(/\r?\n/)
      }
    } catch (error) {
      console.error(error)
    }
  }
  if (response && !response.ok)
    throw new Error('Could not find data locally or in the cloud.')

  return []
}

// TODO: Pending return type
export default async (file: string) => {
  config = JSON.parse(process.env.CONFIG)

  const data: Array<string> = await retrieve(
    `./data/${config.year}/${process.env.DAY}/`,
    file
  )

  return data
}
