import fetch from 'node-fetch'

export default async (): Promise<Array<string>> => {
  let config = JSON.parse(process.env.CONFIG)
  let day = process.env.DAY.match(/\d+/)

  let response = await fetch(
    `https://adventofcode.com/${config.year}/day/${day}/input`,
    {
      headers: {
        cookie: `session=${config.session}`
      }
    }
  )

  if (response.ok) {
    let text: string = await response.text()

    return text.split(/\r?\n/)
  }
  throw new Error("Couldn't read or fetch data")
}
