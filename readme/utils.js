class Splitter extends String {
  get h1() {
    return new Splitter(this.trimEnd() + '\n\n#\n\n')
  }
  get h2() {
    return new Splitter(this.trimEnd() + '\n\n##\n\n')
  }
  get hr() {
    return new Splitter(this.trimEnd() + '\n\n<hr/>\n\n')
  }
  get br() {
    return new Splitter(this.trimEnd() + '\n\n<br/>\n\n')
  }
}

exports.splitter = new Splitter('')
