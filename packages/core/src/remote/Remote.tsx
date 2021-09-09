import React from 'react'
import { reset } from './reset'
import Card from './components/Card'
import { styled } from './theme'
import jet from 'node-jet'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  padding: '$3',
  gap: '$2',
  '@bp2': {
    gridTemplateColumns: '1fr 1fr'
  },
  '@bp1': {
    gridTemplateColumns: '1fr'
  }
})

const Remote = ({ jetPort, scenes }:{ jetPort:string, scenes:Record<string, {}> }) => {
  const jetPeer = new jet.Peer({
    // url: `ws://${location.hostname}:${jetPort}`
    port: jetPort
  })
  reset()
  const sceneCards = Object.keys(scenes).map(i => <Card key={i} name={i} jetPeer={jetPeer} />)
  return (
    <Grid>
      {sceneCards}
    </Grid>
  )
}

export default Remote
