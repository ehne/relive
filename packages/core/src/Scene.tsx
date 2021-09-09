import React, { useEffect } from 'react'
import jet from 'node-jet'

interface ScreenProps {
  name: string,
  Component: React.Node,
  jetPort: string
}

const Scene = ({ name, Component, jetPort }:ScreenProps) => {
  useEffect(() => {
    const jetPeer = new jet.Peer({ port: jetPort })
    const send = new jet.Method(`send/${name}`)
    send.on('call', (name:string) => {
      console.log(`data recieved from '${name}' remote`)
    })

    Promise.all([
      jetPeer.connect(),
      jetPeer.add(send)
    ])
  }, [])

  return (
    <div>
      <Component />
    </div>
  )
}

export default Scene
