import React, { Suspense } from 'react'
import { render } from 'react-dom'

export const registerRelive = (Component) => {
  render(
    <Suspense>
      <Component />
    </Suspense>
    , document.querySelector('#main')
  )
}
