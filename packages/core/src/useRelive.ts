import { useContext, useEffect, useState } from 'react'
import jet from 'node-jet'
import requestAnimationFrame from 'raf'
import { SceneContext } from './SceneContext'

const useRelive = (fps = 30) => {
  const { jetPeer, name } = useContext(SceneContext)
  const [currentFrame, setCurrentFrame] = useState(0)
  const [frameLastUpdated, setFrameLastUpdated] = useState(0)
  const [dataChanged, setDataChanged] = useState(false)
  const [data, setData] = useState({})

  // creates the frame loop, increases frame value each second.
  useEffect(() => {
    let start = performance.now()
    const loop = () => {
      const current = performance.now()
      const delta = current - start
      if (delta >= 1000 / fps) {
        setCurrentFrame(c => c + 1)
        start = performance.now()
      }
      requestAnimationFrame(loop)
    }
    requestAnimationFrame(loop)
  }, [])

  // jet connection
  useEffect(() => {
    const send = new jet.Method(`send/${name}`)
    send.on('call', ([newData]) => {
      console.log(`data recieved from '${name}' remote`)
      // sets new data and triggers a frame reset.
      setData(newData)
      setDataChanged(d => !d)
    })
    // connect to jet and add the send method
    Promise.all([
      jetPeer.connect(),
      jetPeer.add(send)
    ])
  }, [])

  // updates the frame last updated
  useEffect(() => {
    setFrameLastUpdated(currentFrame)
  }, [dataChanged])

  return {
    data,
    currentFrame,
    frameLastUpdated,
    jetPeer
  }
}

export default useRelive
