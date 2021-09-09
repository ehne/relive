import { render } from 'react-dom'

const reset = () => {
  render(
    `
      @import url("https://cdn.jsdelivr.net/gh/jgthms/minireset.css@master/minireset.min.css");
      @import url('https://rsms.me/inter/inter.css');
      html { font-family: 'Inter', sans-serif; }
      @supports (font-variation-settings: normal) {
        html { font-family: 'Inter var', sans-serif; }
      }
      html,body {
        background-color: #252121;
        color: #EEEDED;
        font-size: 16px
      }
    `,
    document.querySelector('#reliveResetStyles')
  )
}

export { reset }
