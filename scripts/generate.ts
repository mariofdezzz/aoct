import { mkdir, writeFile } from 'fs/promises'

const ora = require('ora')

const generate = async () => {
  const args = process.argv.slice(2)

  if (args.length != 3) throw new Error('Wrong arguments!')

  const year = +args[0]
  const from = +args[1]
  const to = +args[2]
  const total = to - from

  const spinner = ora()
  spinner.start(`Generating files (0/${total})`)

  try {
    await mkdir(`./data/${year}`, { recursive: true })

    for (let i = from; i <= to; i++) {
      await mkdir(`./data/${year}/day${i}`, { recursive: true })

      // Do not overwrite policy
      try {
        await writeFile(`./data/${year}/day${i}/input.txt`, '', { flag: 'wx' })
        await writeFile(`./data/${year}/day${i}/test.txt`, '', { flag: 'wx' })
      } catch (error) {}

      spinner.text = `Generating files (${i - from}/${total})`
    }

    spinner.succeed()
  } catch (error) {
    spinner.fail()
    console.error(error)
  }
}

generate()
