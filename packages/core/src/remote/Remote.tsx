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

const Remote = ({ jetPort }:{ jetPort:string }) => {
  const jetPeer = new jet.Peer({
    // url: `ws://${location.hostname}:${jetPort}`
    port: jetPort
  })
  reset()
  return (
    <Grid>
      <Card name="hi" jetPeer={jetPeer}/>
    </Grid>
  )
}

export default Remote
