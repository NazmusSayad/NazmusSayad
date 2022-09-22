console.clear()
const { writeFileSync } = require('fs')
const { getMarkup, splitter } = require('./utils')
const [intro, overview, metrics, footer] = getMarkup(
  require('./partials/intro'),
  require('./partials/overview'),
  require('./partials/metrics'),
  require('./partials/footer')
)

const markupArray = [
  intro,
  splitter.br.hr.br.nl(2),
  overview,
  splitter.br.br.h2.br.br.nl(2),
  metrics,
  splitter.h1.br.nl(2),
  footer,
]

writeFileSync('README.md', markupArray.join(''))
