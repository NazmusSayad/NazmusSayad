console.clear()
const { writeFileSync } = require('fs')
const { splitter } = require('./utils')
const data = require('./generate')()

const markupArray = [
  data.intro,
  splitter.br,
  data.stack,
  splitter.br,
  data.projects,
  splitter.br.h2.br,
  data.overview,
  // splitter.br.br.h2.br,
  // data.metrics,
  splitter.h1.br,
  data.footer,
]

writeFileSync('README.md', markupArray.join('').trim())
