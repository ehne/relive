import xns from 'xns'
import sade from 'sade'
import getPort from 'get-port'
import path from 'path'
import { startServer } from './server'
import { bundler } from './bundle'

export const cli = xns(async () => {
  const prog = sade('relive')

  prog.version('v0.0.1')

  prog
    .command('run <src>')
    .describe('Runs the specified file in Relive')
    .option('--port', 'Set the port to use. (assumes it is free).')
    .action(async (src, opts) => {
      const port = opts.port
        ? opts.port
        : await getPort({ port: getPort.makeRange(3000, 3100) })

      // generate bundle
      await bundler(src, path.join(__dirname, '..', 'web', 'bundle.js'))
      startServer(process.cwd(), src, port)
      await new Promise(() => undefined)
    })

  await prog.parse(process.argv)
})
