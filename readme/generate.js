const fs = require('fs')
const path = require('path')
const data = require('./data')

module.exports = () => {
  const newData = {}

  for (let name in data) {
    const filePlaceholders = data[name]
    const filePath = path.join(__dirname, './components/' + name + '.md')
    let fileData = fs.readFileSync(filePath, 'utf-8')

    for (let key in filePlaceholders) {
      fileData = fileData.replaceAll(
        '{' + key.toUpperCase() + '}',
        filePlaceholders[key]
      )
    }

    newData[name] = fileData.replaceAll('{ASSETS}', '/assets')
  }

  return newData
}
