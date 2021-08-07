import { mkdir, writeFile } from 'fs/promises'

export default async (text: string): Promise<void> => {
  const { year }: {year: string} = JSON.parse(
    process.env.CONFIG ?? '{"year":2015}'
  )
  const day = process.env.DAY ?? 'day1'

  await mkdir(`./data/${year}/${day}`, {
    recursive: true
  })
  await writeFile(`./data/${year}/${day}/input.txt`, text)
}
