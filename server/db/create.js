const fs = require('fs')

const create = data => {
  const list = JSON.parse(fs.readFileSync('./db/pwd.json', 'utf8'))
  list.push(data)

  fs.writeFileSync('./db/pwd.json', JSON.stringify(list))
}

module.exports = create
