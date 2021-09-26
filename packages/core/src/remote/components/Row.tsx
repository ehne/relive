import React from 'react'
import { styled } from '../theme'

const StyledRow = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '$rowHeight',
  marginBottom: '$1',
  '&:not(:last-child)': {
    marginBottom: '$2'
  }
})

const StyledInputRow = styled('div', {
  display: 'grid',
  rowGap: '$1',
  position: 'relative',
  alignItems: 'center',
  gridTemplateRows: 'minmax($sizes$rowHeight, max-content)',
  gridTemplateColumns: 'auto $sizes$controlWidth',
  columnGap: '$1',
  '&:not(:last-child)': {
    marginBottom: '$2'
  }
})

const Row = (props) => {
  if (props.input) {
    return (<StyledInputRow {...props} />)
  }
  return (<StyledRow {...props} />)
}

export { Row }
