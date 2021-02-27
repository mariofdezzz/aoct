import { readFileSync } from 'fs'

type Config = {
  compiler: string
  year: number
}

type Parsed<T> =
  | { parsed: T; throwError: false; error?: undefined }
  | { parsed?: undefined; throwError: true; error?: unknown }

const isConfig = (o: any): o is Config => {
  return 'compiler' in o && 'year' in o
}

const parse = <T>(guard: (o: any) => o is T) => (text: string): Parsed<T> => {
  const parsed = JSON.parse(text)
  return guard(parsed) ? { parsed, throwError: false } : { throwError: true }
}

export default (): Config => {
  const json = readFileSync('aocconfig.json').toString()
  const obj = parse(isConfig)(json)
  if (obj.throwError) throw new Error('Missing arguments in aocconfig.json')

  return obj.parsed
}
