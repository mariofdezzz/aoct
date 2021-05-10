import { existsSync, readFileSync } from 'fs'

export class Config {
  public year: number = new Date().getFullYear()
  public compiler: 'js' | 'ts' = 'js'
  public session: string

  public constructor(init?: Partial<Config>) {
    Object.assign(this, init)
  }
}

type Parsed<T> =
  | { parsed: T; throwError: false; error?: undefined }
  | { parsed?: undefined; throwError: true; error?: unknown }

const isConfig = (o: any): o is Config => {
  return o.compiler == 'js' || o.compiler == 'ts'
}

const parse = <T>(guard: (o: any) => o is T) => (text: string): Parsed<T> => {
  const parsed = new Config(JSON.parse(text))
  return guard(parsed) ? { parsed, throwError: false } : { throwError: true }
}

export default (): Config => {
  const json = existsSync('aoct.json')
    ? readFileSync('aoct.json').toString()
    : '{}'
  const obj = parse(isConfig)(json)

  if (obj.throwError) throw new Error('Wrong arguments in aoct.json')

  return obj.parsed
}
