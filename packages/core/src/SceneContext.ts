import { createContext } from 'react'

const init = {
  jetPeer: '',
  name: ''
} as {
  jetPeer: any,
  name: string
}

export const SceneContext = createContext(init)
