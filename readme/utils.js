const fs = require('fs')

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
