export default ({ part1, part2 }) => {
  // === Execution ===
  console.time('Executed in')
  const result1 = part1()
  const result2 = part2()
  console.timeEnd('Executed in')

  // === Results ===
  console.log('Solution to part 1:', result1)
  console.log('Solution to part 2:', result2)
}
