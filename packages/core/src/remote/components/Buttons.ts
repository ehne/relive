import { styled } from '../theme'

const baseStyles = {
  display: 'inline-block',
  outline: 'none',
  border: 'none',
  padding: '$1 $2',
  backgroundColor: '$gray1',
  color: '$gray8',
  fontFamily: "'Inter', sans-serif",
  fontSize: '$2',
  textAlign: 'center',
  cursor: 'pointer',
  transition: '$hover',
  '&:hover': {
    opacity: 0.8
  },
  variants: {
    size: {
      full: {
        width: '100%'
      }
    },
    color: {
      layer: {
        backgroundColor: '$layer',
        color: '$gray1'
      },
      accent: {
        backgroundColor: '$accent',
        color: '$accentContrasted'
      }
    }
  }
}

export const Button = styled('button', baseStyles)
export const ButtonLink = styled('a', baseStyles)
