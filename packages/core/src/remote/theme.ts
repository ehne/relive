import { createStitches } from '@stitches/react'

export const { styled, css } = createStitches({
  theme: {
    colors: {
      gray1: '#EEEDED',
      gray2: '#D3CECE',
      gray3: '#B8B0B0',
      gray4: '#9C9292',
      gray5: '#807474',
      gray6: '#625858',
      gray7: '#433D3D',
      gray8: '#252121',
      accent: '#FF0000',
      accentContrasted: '#FFE6E5'
    },
    space: {
      1: '8px',
      2: '16px',
      3: '32px'
    },
    fontSizes: {
      1: '8px',
      2: '16px',
      3: '32px'
    }
  },
  prefix: 'relive'
})
