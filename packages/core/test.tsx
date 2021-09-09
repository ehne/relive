import React from 'react'
import { registerRelive, useRelive, stringControl } from './src/index'

const cool = () => {
  const { data, currentFrame, frameLastUpdated } = useRelive()
  return (
    <div>hello, delta = {currentFrame - frameLastUpdated} frame last updated: {frameLastUpdated} <br/> {JSON.stringify(data)}</div>
  )
}

registerRelive({
  cool: {
    component: cool,
    controls: {
      ...stringControl('coolNameBro'),
      ...stringControl('aDefault', 'yes!')
    }
  }
})
