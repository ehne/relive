import React, { useState, useEffect } from 'react'
import { styled } from '../theme'
import Row from './Row'
import { Button } from './Buttons'
import StringControl from './StringControl'

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

const Card = ({ name, jetPeer, sceneObjControls }:{ name:string, jetPeer, key:string, sceneObjControls:{} }) => {
  const [data, setData] = useState({})

  const controls = Object.keys(sceneObjControls).map(i => {
    const ControlComponent = {
      string: StringControl
    }[sceneObjControls[i].type]

    return (
      <Row key={i}>
        <ControlComponent name={i} data={data} setData={setData} {...sceneObjControls[i]} />
      </Row>
    )
  })

  useEffect(() => {
    jetPeer.call(`send/${name}`, [data])
  }, [])

  return (
    <CardBase>
      <Row>
        <Title>{name}</Title>
        <SceneLink href={`/scene/${name}`} target="_blank" rel="noopener noreferrer">↗</SceneLink>
      </Row>
      {controls}
      <Row>
        <Button size="full" color="accent" onClick={() => { jetPeer.call(`send/${name}`, [data]) }}>Send</Button>
      </Row>
    </CardBase>
  )
}

export default Card
