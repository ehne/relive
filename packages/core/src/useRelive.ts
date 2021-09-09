import { useContext } from 'react'
import jet from 'node-jet'
import { SceneContext } from './SceneContext'

const useRelive = () => {
  const { jetPeer, name } = useContext(SceneContext)
  const send = new jet.Method(`send/${name}`)
  send.on('call', ([data]) => {
    console.log(`data recieved from '${name}' remote`)
    console.log(data)
  })

  // connect to jet and add the send method
  Promise.all([
    jetPeer.connect(),
    jetPeer.add(send)
  ])
  return {
    data: {},
    currentFrame: 0,
    frameLastUpdated: 0,
    jetPeer
  }
}

export default useRelive
