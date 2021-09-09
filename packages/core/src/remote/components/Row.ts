import { styled } from '../theme'

const Row = styled('div', {
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

export default Row
