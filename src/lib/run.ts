import { log, measure } from '../assets/performance'

export default (part1: Function, part2: Function, input_: boolean = true) => {
  let data = input_
    ? JSON.parse(process.env.INPUT)
    : JSON.parse(process.env.TEST)

  // === Execution ===
  const result1 = measure(part1, data)
  const result2 = measure(part2, data)

  // === Results ===
  // Empty space before start
  console.log('')

  let spaceDiff = ('' + result1.time).length - ('' + result2.time).length
  log('Part One', result1)
  log('Part Two', result2)
}
