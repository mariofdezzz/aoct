import { fetchData, readData, writeData } from '../components'

export default async (spinner): Promise<void> => {
  const { saveFetched } = JSON.parse(process.env.CONFIG)

  spinner.start('Loading input')

  if (await readInput()) spinner.succeed()
  else {
    if (await fetchInput()) {
      spinner.succeed()

      if (saveFetched) {
        spinner.start('Saving input')

        if (await saveInput()) spinner.succeed()
        else spinner.warn("Couldn't save input")
      }
    } else {
      spinner.fail("Couldn't read or fetch input")
      process.env.INPUT = JSON.stringify([])
    }
  }

  spinner.start('Loading test')

  try {
    let data = await readData('test.txt')
    process.env.TEST = JSON.stringify(data)

    spinner.succeed()
  } catch (error) {
    spinner.warn("Couldn't load test")
    process.env.TEST = JSON.stringify([])
  }
}

const readInput = async (): Promise<Boolean> => {
  try {
    let data = await readData('input.txt')
    process.env.INPUT = JSON.stringify(data)
  } catch (error) {
    return false
  }
  return true
}

const fetchInput = async (): Promise<Boolean> => {
  try {
    let data = await fetchData()
    process.env.INPUT = JSON.stringify(data)
  } catch (error) {
    return false
  }
  return true
}

const saveInput = async (): Promise<Boolean> => {
  let data = JSON.parse(process.env.INPUT)

  try {
    await writeData(
      data.reduce(
        (acc, curr, idx) => (idx === 0 ? curr : `${acc}\n${curr}`),
        ''
      )
    )
  } catch (error) {
    return false
  }
  return true
}
