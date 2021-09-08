import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Route } from 'wouter'

export const registerRelive = (Component) => {
  const App = () => (
    <>
      <Route path="/">
        this is where the control panel lives
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
    , document.querySelector('#main')
  )
}
