console.clear()
const { writeFileSync } = require('fs')
const { splitter } = require('./utils')
const data = require('./generate')()

const markupArray = [
  data.intro,
  splitter.br.nl(2),
  data.stack,
  splitter.br.br.hr.br.nl(2),
  data.overview,
  splitter.br.br.nl(2),
  data.projects,
  splitter.br.br.h2.br.nl(2),
  data.metrics,
  splitter.h1.br.nl(2),
  data.footer,
]

writeFileSync('README.md', markupArray.join('').trim())
