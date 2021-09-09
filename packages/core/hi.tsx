import React from 'react'
import { registerRelive, useRelive } from './src/index'

const cool = () => {
  const { data, currentFrame, frameLastUpdated } = useRelive()
  return (
    <div>hello, delta = {currentFrame - frameLastUpdated} frame last updated: {frameLastUpdated}</div>
  )
}

registerRelive({
  cool: {
    component: cool
  }
})
