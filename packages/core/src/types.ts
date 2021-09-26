import React from 'react'

export interface SceneObject {
  component: React.Node,
  controls: Record<string, any>
}

export interface ScreenProps {
  name: string,
  Component: React.Node,
  jetPort: string
}


export interface StringControlType {
  type: "string",
  defaultString?: string
}

export interface NumberControlType {
  type: 'number'
  defaultNumber?: Number
}