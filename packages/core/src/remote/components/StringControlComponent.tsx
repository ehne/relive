import React, { useEffect } from 'react'
import { ValueInput } from './ValueInput'

const StringControlComponent = ({ data, setData, name, defaultString = '' }:{ data, setData, name:string, defaultString:string }) => {
  // sets the default string
  useEffect(() => {
    setData(d => ({ ...d, [name]: defaultString }))
  }, [])
  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(d => ({ ...d, [name]: e.target.value }))
  }
  return (
    <>
      {name}
      <ValueInput value={data[name]} onInput={handler}/>
    </>
  )
}

export default StringControlComponent
