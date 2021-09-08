import chalk from 'chalk'

// slightly nicer logging experience
export const log = (scope: 'ui' | 'daemon', message:string) => {
  let color: chalk.Chalk
  switch (scope) {
    case 'ui':
      color = chalk.green
      break
    case 'daemon':
      color = chalk.magenta
      break
  }
  const coloredScope = color(`[${scope}]`)
  console.log(`${coloredScope} ${message}`)
}
