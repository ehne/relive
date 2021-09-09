import path from 'path'
import polka from 'polka'
import sirv from 'sirv'
import jet from 'node-jet'
import getPort from 'get-port'

import { log } from './log'

export const startServer = async (workingDir:string, userFile:string, port:Number) => {
  // serves static files present in web.
  const serve = sirv(path.join(__dirname, '..', 'web'), { single: true, ignores: ['/internalport'] })
  const app = polka()

  // sets up Jet daemon
  const internalPort = await getPort({ port: 11128 })
  const daemon = new jet.Daemon()

  // does routing
  app
    .use(serve)
    .get('/internalport', (req, res) => {
      res.end(`${internalPort}`)
    })
    .listen(port, () => {
      log('ui', `running on localhost:${port}`, `http://localhost:${port}`)
    })

  // listens in on the daemon
  daemon.listen({
    server: app.server,
    tcpPort: internalPort
  })

  // opens a jet peer to add methods
  const peer = new jet.Peer({ port: internalPort })

  const send = new jet.Method('send')
  send.on('call', (name) => {
    log('daemon', `data sent from '${name}' remote`)
  })

  Promise.all([
    peer.connect(),
    peer.add(send)
  ]).then(() => {
    log('daemon', `connection established on ${internalPort}`)
  })
}
