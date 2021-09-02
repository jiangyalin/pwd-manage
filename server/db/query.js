const fs = require('fs')

const query = host => {
  const list = JSON.parse(fs.readFileSync('./db/pwd.json', 'utf8'))
  const data = list.find(item => item.host === host) || null
  return data
}

module.exports = query
