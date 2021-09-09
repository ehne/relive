import React from 'react'
import { registerRelive, useRelive } from './src/index'

const cool = () => {
  const { data } = useRelive()
  return (
    <div>hello</div>
  )
}

registerRelive({
  cool: {
    component: cool
  }
})
