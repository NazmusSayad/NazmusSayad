console.clear()
const { writeFileSync } = require('fs')
const { splitter } = require('./utils')
const data = require('./generate')()

const markupArray = [
  data.intro,
  splitter.br,
  data.stack,
  splitter.br.br.hr.br,
  data.overview,
  splitter.br.br,
  data.projects,
  splitter.br.br.h2.br,
  data.metrics,
  splitter.h1.br,
  data.footer,
]

writeFileSync('README.md', markupArray.join('').trim())
