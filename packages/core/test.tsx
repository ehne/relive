import React from 'react'
import { registerRelive, useRelive } from './src/index'
import { numberControl, stringControl } from './src/controls'

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
      personName: numberControl()
    }
  }
})
