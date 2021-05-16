import { constants } from 'fs'
import { mkdir, access, copyFile } from 'fs/promises'
import { resolve } from 'path'

const { F_OK } = constants

export default async (): Promise<void> => {
  const { year, compiler } = JSON.parse(process.env.CONFIG)
  let day = process.env.DAY

  await mkdir(`./src/${year}`, { recursive: true })

  try {
    await access(`./src/${year}/${day}.${compiler}`, F_OK)
  } catch (error) {
    await copyFile(
      resolve(__dirname, `../../templates/index.${compiler}`),
      `./src/${year}/${day}.${compiler}`
    )
  }
}
