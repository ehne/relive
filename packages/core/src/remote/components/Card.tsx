import React from 'react'
import { styled } from '../theme'
import Row from './Row'
import { Button } from './Buttons'

const CardBase = styled('div', {
  padding: '$2',
  position: 'relative',
  backgroundColor: '$layer'
})

const SceneLink = styled('a', {
  display: 'block',
  backgroundColor: '$layer',
  padding: '$1',
  lineHeight: '1',
  color: '$gray1',
  transition: '$hover',
  textDecoration: 'none',
  '&:hover': {
    opacity: 0.7
  }
})
const Title = styled('h2', {
  display: 'block',
  fontWeight: 'bold',
  color: '$gray1'
})

const Card = ({ name, jetPeer }:{ name:string, jetPeer, key:string}) => {
  return (
    <CardBase>
      <Row>
        <Title>{name}</Title>
        <SceneLink href={`/scene/${name}`} target="_blank" rel="noopener noreferrer">↗</SceneLink>
      </Row>
      <Row>
        <Button size="full" color="accent" onClick={() => { jetPeer.call(`send/${name}`, [name]) }}>Send</Button>
      </Row>
    </CardBase>
  )
}

export default Card
