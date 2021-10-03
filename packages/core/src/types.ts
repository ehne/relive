import React from 'react'

export interface SceneObject {
  component: React.ElementType,
  controls: Record<string, any>
}

export interface ScreenProps {
  name: string,
  Component: React.ElementType,
  jetPort: string
}

export interface StringControlType {
  type: 'string',
  defaultString?: string
}

export interface NumberControlType {
  type: 'number'
  defaultNumber?: Number
}

export type Interval = [number, number]

export type ExtrapolateType = 'clamp'
