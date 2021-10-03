import React from 'react'
import { registerRelive, useRelive, interpolate } from './src/index'
import { numberControl, stringControl } from './src/controls'

const cool = () => {
  const { data, currentFrame, frameLastUpdated } = useRelive()
  const opacity = interpolate(currentFrame, [30, 60], [0, 1])
  return (
    <div style={{ opacity }}>{opacity } hello, delta = {currentFrame - frameLastUpdated} frame last updated: {frameLastUpdated} <br/> {JSON.stringify(data)}</div>
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
