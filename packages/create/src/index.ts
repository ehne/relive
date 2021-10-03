import path from 'path'
import fs from 'fs'
import execa from 'execa'

const files = (name) => [
  [
    'index.jsx',
    `import React from 'react'
import { registerRelive, useRelive, controls } from '@relivecg/core'

const helloWorld = () => {
  const { data, currentFrame, frameLastUpdated } = useRelive()
  return (
    <div>hello {data['name']}, current frame: {currentFrame}; frame last updated: {frameLastUpdated} <br/> data: {JSON.stringify(data)}</div>
  )
}

registerRelive({
  'hello world': {
    component: helloWorld,
    controls: {
      name: controls.stringControl()
    }
  }
})`
  ],
  [
    'package.json',
    `
    {
      "name": "${name}",
      "version": "1.0.0",
      "description": "",
      "main": "index.jsx",
      "type": "module",
      "scripts": {
        "start": "relive run index.jsx"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "dependencies": {
        "@relivecg/core": "*",
        "@relivecg/cli": "*",
      }
    }
    `
  ]
]

const create = () => {
  const projectName = process.argv[2]

  console.log('creating directory')
  fs.mkdirSync(path.join(process.cwd(), projectName))

  console.log('saving files')
  files(projectName).forEach(i => {
    fs.writeFileSync(
      path.join(process.cwd(), projectName, i[0]),
      i[1]
    )
    console.log(`> ${i[0]} saved`)
  })

  console.log(`installing npm modules in ${path.resolve(projectName)}`)
  const promise = execa('npm', ['install'], {
    cwd: path.resolve(projectName)
  })
  promise.stderr.pipe(process.stderr)
  promise.stdout.pipe(process.stdout)
}

create()
