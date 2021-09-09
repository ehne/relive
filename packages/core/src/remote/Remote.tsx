import React from 'react'
import { reset } from './reset'
import Card from './components/Card'
import { styled } from './theme'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  padding: '$3',
  gap: '$2'
})

const Remote = () => {
  reset()
  return (
    <Grid>
      <Card name="hi" />
    </Grid>
  )
}

export default Remote
