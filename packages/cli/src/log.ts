import chalk from 'chalk'
import clipboardy from 'clipboardy'

// slightly nicer logging experience
export const log = (scope: 'ui' | 'daemon', message:string, toCopy?:string) => {
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

  let copyMessage = ''
  if (toCopy) {
    clipboardy.writeSync(toCopy)
    copyMessage = chalk.dim(' [Copied to clipboard]')
  }

  console.log(`${coloredScope} ${message}${copyMessage}`)
}
