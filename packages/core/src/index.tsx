import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Route } from 'wouter'

import Remote from './remote/Remote'

export const registerRelive = async (Component) => {
  const jetPort = await fetch(`http://${window.location.host}/internalport`).then(d => d.text())
  const App = () => (
    <>
      <Route path="/">
        <Remote jetPort={jetPort}/>
      </Route>
      <Route path="/scene/:name">
        {({ name }) => <div>this is the <b>&quot;{name}&quot;</b> scene</div>}
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
