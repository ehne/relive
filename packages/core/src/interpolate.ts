import { Interval } from './types'

export default (frame: number, inInterval: Interval, outInterval: Interval, options?: {
  easing?: (input: number) => number
}) => {
  let out = frame
  const [inMin, inMax] = inInterval
  const [outMin, outMax] = outInterval

  // clamping out to the right
  if (out > inMax) {
    return outMax
  }
  // clamping to the left
  if (out < inMin) {
    return outMin
  }

  // map out to the inInterval
  out = (out - inMin) / (inMax - inMin)

  // apply the easing function
  out = (options?.easing ?? (n => n))(out)

  // map out to the outInterval
  out = out * (outMax - outMin) + outMin
  return out
}
