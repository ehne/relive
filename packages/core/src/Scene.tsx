import React, { useEffect, useState } from 'react'
import jet from 'node-jet'
import { SceneContext } from './SceneContext'
import { ScreenProps } from './types'

const Scene = ({ name, Component, jetPort }:ScreenProps) => {
  const [jetPeer, setJetPeer] = useState(new jet.Peer({ port: jetPort }))
  useEffect(() => {
    return () => {
      setJetPeer(jetPeer)
    }
  }, [])

  return (
    <SceneContext.Provider value={{ jetPeer, name }}>
      <Component />
    </SceneContext.Provider>
  )
}

export default Scene
