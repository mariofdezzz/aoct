import fetch from 'node-fetch'

export default async (file: string): Promise<Array<string>> => {
  let config = JSON.parse(process.env.CONFIG)

  let response = await fetch(
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
    throw new Error("Couldn't find data locally or in the cloud")
  }
}
