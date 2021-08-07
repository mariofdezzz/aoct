interface logInput {
  solution: number
  time: number
}

export default (title: string, { solution, time }: logInput): void => {
  console.log('\x1b[0m\x1b[32m' + `[${time}ms]` + '\x1b[0m', title, solution)
}
