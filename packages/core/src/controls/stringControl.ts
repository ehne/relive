import { StringControlType } from '../types'

export const stringControl = (defaultString?:string):StringControlType => {
  const out:StringControlType = {
    type: 'string'
  }
  if (defaultString) {
    out.defaultString = defaultString
  }
  return out
}
