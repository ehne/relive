import React, { useEffect } from 'react'
import { styled } from '../theme'

const Input = styled('input', {
  backgroundColor: '$gray8',
  border: '1px solid $gray5',
  fontSize: '$2',
  padding: '$1',
  color: '$gray1',
  height: '$rowHeight',
  fontFamily: "'Inter', sans-serif",
  marginLeft: '$1'
})

const StringControl = ({ data, setData, name, defaultString = '' }:{ data, setData, name:string, defaultString:string }) => {
  // sets the default string
  useEffect(() => {
    setData(d => ({ ...d, [name]: defaultString }))
  }, [])

  return (
    <>
      {name}
      <Input value={data[name]} onInput={e => setData(d => ({ ...d, [name]: e.target.value }))}/>
    </>
  )
}

export default StringControl
