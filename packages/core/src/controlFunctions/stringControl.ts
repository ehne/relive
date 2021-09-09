import { StringControl } from './controlTypes'

export const stringControl = (name:string, defaultString?:string):Record<string, StringControl> => {
  const out = {}
  out[name] = {
    type: 'string'
  }
  if (defaultString) {
    out[name].defaultString = defaultString
  }
  return out
}
