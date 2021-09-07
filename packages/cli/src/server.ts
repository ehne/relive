import path from 'path'
import polka from 'polka'
import sirv from 'sirv'
import jet from 'node-jet'
import getPort from 'get-port'

export const startServer = async (workingDir:String, userFile:String, port:Number) => {
  // serves static files present in web.
  const serve = sirv(path.join(__dirname, '..', 'web'))
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
      console.log(`> running on localhost:${port}`)
    })

  // listens in on the daemon
  daemon.listen({
    server: app.server,
    tcpPort: internalPort
  })

  // opens a jet peer to add methods
  const peer = new jet.Peer({ port: internalPort })

  const greet = new jet.Method('greet')
  greet.on('call', (who) => {
    console.log('Hello', who)
  })

  peer.add(greet)

  // connect to Jet
  peer.connect().then(() => {
    console.log('connection to Daemon established')
    console.log('Daemon Info: ', peer.daemonInfo)
  })
}
