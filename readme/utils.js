const fs = require('fs')

const _getMarkup = ({ path, placeHolders = {} }) => {
  let markup = fs.readFileSync(path, 'utf-8')
  for (let key in placeHolders) {
    const value = placeHolders[key]
    markup = markup.replaceAll(`{${key.toUpperCase()}}`, value)
  }
  return markup.replaceAll('{ASSESTS}', '/readme/assests')
}

exports.getMarkup = function () {
  return arguments.length === 1
    ? _getMarkup(arguments[0])
    : [...arguments].map(el => _getMarkup(el))
}

class Splitter extends String {
  nl(count = 1) {
    return new Splitter(this + '\n'.repeat(count))
  }
  get h1() {
    return new Splitter(this + '\n\n#\n\n')
  }
  get h2() {
    return new Splitter(this + '\n\n##\n\n')
  }
  get hr() {
    return new Splitter(this + '<hr/>')
  }
  get br() {
    return new Splitter(this + '<br/>')
  }
}

exports.splitter = new Splitter('\n')
