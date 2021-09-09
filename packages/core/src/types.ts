import React from 'react'
import { ControlObject } from './controlFunctions/controlTypes'

export interface SceneObject {
  component: React.Node,
  controls: Record<string, ControlObject>
}

export {
  ControlObject
}
