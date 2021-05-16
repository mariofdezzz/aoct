import { mkdir, writeFile } from 'fs/promises'

export default async (text: string): Promise<void> => {
  let config = JSON.parse(process.env.CONFIG)

  await mkdir(`./data/${config.year}/${process.env.DAY}`, {
    recursive: true
  })
  await writeFile(`./data/${config.year}/${process.env.DAY}/input.txt`, text)
}
