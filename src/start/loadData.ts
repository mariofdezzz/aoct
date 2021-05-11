import { fetchData, readData, writeData } from '../components'

export default async (spinner): Promise<void> => {
  spinner.start('Loading data')

  try {
    let data = await readData('input.txt')

    process.env.INPUT = JSON.stringify(data)
  } catch (error) {
    try {
      let data = await fetchData()
      process.env.INPUT = JSON.stringify(data)

      writeData(
        data.reduce(
          (acc, curr, idx) => (idx === 0 ? curr : `${acc}\n${curr}`),
          ''
        )
      )
    } catch (error) {
      spinner.fail("Couldn't load input")
      process.env.INPUT = JSON.stringify([])
      spinner.start('Loading data')
    }
  }
  try {
    let data = await readData('test.txt')
    process.env.TEST = JSON.stringify(data)
  } catch (error) {
    spinner.fail("Couldn't load test")
    process.env.TEST = JSON.stringify([])
    spinner.start('Loading data')
  }

  spinner.succeed()
}
