import { test, input } from './data'

export default (part1: Function, part2: Function, input_: boolean = true) => {
  let data = input_ ? input() : test()

  // === Execution ===
  console.time('Executed in')
  const result1 = part1(data)
  const result2 = part2(data)
  console.timeEnd('Executed in')

  // === Results ===
  console.log('Solution to part 1:', result1)
  console.log('Solution to part 2:', result2)
}
