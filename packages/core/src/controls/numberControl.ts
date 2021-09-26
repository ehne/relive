import { NumberControlType } from '../types'

export const numberControl = (defaultNumber?:Number):NumberControlType => {
  const out:NumberControlType = {
    type: 'number'
  }
  if (defaultNumber) {
    out.defaultNumber = defaultNumber
  }
  return out
}