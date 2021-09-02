const express = require('express')
const router = express.Router()
const db = require('./../../db')
const createPwd = require('./../../create-pwd')

class Block {
  constructor ({ pwd, account, host }) {
    this.host = host || '' // 域名
    this.account = account || '' // 账号
    this.pwd = pwd || '' // 密码
  }
}

router.get('/get', (req, res) => {
  const host = req.query.host || ''
  const data = db.query(host)
  let code = 200
  let msg = ''
  if (db.query(host) === null) {
    code = 400
    msg = '不存在记录'
  }
  const body = {
    code,
    data,
    msg
  }
  res.jsonp(body)
})

router.post('/create', (req, res) => {
  const typeMap = {
    1: {
      isDigit: true,
      isLetter: false,
      isCase: false,
      isSymbol: false
    },
    2: {
      isDigit: true,
      isLetter: true,
      isCase: false,
      isSymbol: false
    },
    3: {
      isDigit: true,
      isLetter: true,
      isCase: true,
      isSymbol: false
    },
    4: {
      isDigit: true,
      isLetter: true,
      isCase: true,
      isSymbol: true
    }
  }
  const host = req.body.host || ''
  const type = req.body.type
  const account = req.body.account
  const length = req.body.length || 6
  let code = 200
  let msg = ''
  let pwd = ''
  if (!host) {
    code = 300
    msg = '域名不允许为空'
  } else if (!type) {
    code = 301
    msg = '类型不允许为空'
  } else {
    pwd = createPwd(length, { ...typeMap[type] })
  }
  const block = new Block({ host, pwd, account })
  db.create(block)
  const body = {
    code,
    data: pwd,
    msg
  }
  res.jsonp(body)
})

module.exports = router
