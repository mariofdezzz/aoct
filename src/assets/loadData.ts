import { fetch, read, write } from './data'

export default async (spinner): Promise<void> => {
  const { saveFetched }: {saveFetched: boolean} = JSON.parse(
    process.env.CONFIG ?? '{"saveFetched": false}'
  )

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
    const data = await read('test.txt')
    process.env.TEST = JSON.stringify(data)

    spinner.succeed()
  } catch (error) {
    spinner.warn("Couldn't load test")
    process.env.TEST = JSON.stringify([])
  }
}

const readInput = async (): Promise<boolean> => {
  try {
    const data = await read('input.txt')
    process.env.INPUT = JSON.stringify(data)
  } catch (error) {
    return false
  }
  return true
}

const fetchInput = async (): Promise<boolean> => {
  try {
    const data = await fetch()
    process.env.INPUT = JSON.stringify(data)
  } catch (error) {
    return false
  }
  return true
}

const saveInput = async (): Promise<boolean> => {
  const data = JSON.parse(process.env.INPUT ?? '[]')

  try {
    await write(
      data.reduce(
        (acc: string, curr: string, idx: number) =>
          (idx === 0 ? curr : `${acc}\n${curr}`),
        ''
      )
    )
  } catch (error) {
    return false
  }
  return true
}
