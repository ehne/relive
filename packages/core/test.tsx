import React from 'react'
import { registerRelive, useRelive, interpolate, controls } from './src/index'

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
      personName: controls.numberControl()
    }
  }
})
