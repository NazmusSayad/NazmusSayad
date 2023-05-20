const fs = require('fs')
const path = require('path')
const data = require('./data')
const componentsPath = path.join(__dirname, './components')

module.exports = () => {
  const newData = {}
  const files = fs.readdirSync(componentsPath)

  files.forEach((file) => {
    const key = file.replace(/\.md$/, '')
    const placeHolders = data[key]
    const filePath = path.join(componentsPath, '/', file)
    let fileData = fs.readFileSync(filePath, 'utf-8')

    if (placeHolders) {
      for (let key in placeHolders) {
        fileData = fileData.replaceAll(
          '{' + key.toUpperCase() + '}',
          placeHolders[key]
        )
      }
    }

    newData[key] = fileData.replaceAll('{$$}', '/assets')
  })

  return newData
}
