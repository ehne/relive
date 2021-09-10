const fs = require('fs')
const path = require('path')

const indexPath = path.join(__dirname, 'dist', 'index.js')
const filePaths = [indexPath]

const filePrefix = '#! /usr/bin/env node\n'

filePaths.forEach(i => {
  const fileContents = fs.readFileSync(i, 'utf8')

  // if filePrefix not in the file yet, write it there.
  if (!fileContents.startsWith(filePrefix)) {
    fs.writeFileSync(i, filePrefix + fileContents)
  }
})
