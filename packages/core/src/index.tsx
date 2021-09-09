import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { Route } from 'wouter'

import Scene from './Scene'
import Remote from './remote/Remote'

interface SceneObject {
  component: React.Node
}

export const registerRelive = async (components:Record<string, SceneObject>) => {
  const jetPort = await fetch(`http://${window.location.host}/internalport`).then(d => d.text())

  const App = () => (
    <>
      <Route path="/">
        <Remote jetPort={jetPort} scenes={components}/>
      </Route>
      <Route path="/scene/:name">
        {
          ({ name }) => components[name]
            ? <Scene name={name} Component={components[name].component} jetPort={jetPort}/>
            : <>That scene does not exist.</>
        }
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
