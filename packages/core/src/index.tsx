import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Route } from 'wouter'

import Remote from './remote/Remote'

export const registerRelive = (Component) => {
  const App = () => (
    <>
      <Route path="/">
        <Remote />
      </Route>
      <Route path="/screen/:name">
        {({ name }) => <div>this is the <b>&quot;{name}&quot;</b> screen</div>}
      </Route>
    </>
  )
  render(
    <Suspense>
      <App/>
    </Suspense>
    , document.querySelector('#reliveMain')
  )
}
