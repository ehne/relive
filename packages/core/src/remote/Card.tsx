import React from 'react'
import { styled } from './theme'

const CardBase = styled('div', {
  padding: '$2'
})

const Card = ({ children }:React.PropsWithChildren) => {
  return (
    <CardBase>
      {children}
    </CardBase>
  )
}

export default Card
