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

    // Make it an option? config file
    // await mkdir(`./data/${config.year}/${process.env.DAY}`, {
    //   recursive: true
    // })
    // await writeFile(path + file, text)

    return text.split(/\r?\n/)
  } else {
    throw new Error("Couldn't find data locally or in the cloud")
  }
}
