import React, { useEffect } from 'react'
import { ValueInput } from './ValueInput'

const NumberControlComponent = ({ data, setData, name, defaultNumber }:{ data, setData, name:string, defaultNumber:Number }) => {
  useEffect(() => {
    setData(d => ({ ...d, [name]: Number(defaultNumber) }))
  }, [])

  return (
    <>
      {name}
      <ValueInput type="number" pattern="[0-9]*" value={data[name]} onInput={e => setData(d => ({ ...d, [name]: Number(e.target.value) }))}/>
    </>
  )
}

export default NumberControlComponent
