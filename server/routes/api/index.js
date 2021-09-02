const express = require('express')
const router = express.Router()
const db = require('./../../db')
const createPwd = require('./../../create-pwd')

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
  const host = req.body.host || ''
  let code = 200
  let msg = ''
  let pwd = ''
  if (host === null) {
    code = 300
    msg = '域名不允许为空'
  } else {
    pwd = createPwd(16)
  }
  db.create({
    host,
    pwd
  })
  const body = {
    code,
    data: pwd,
    msg
  }
  res.jsonp(body)
})

// router.delete('/delete', (req, res) => {
//   console.log('get.query', req.query)
//   const data = {
//     code: 200,
//     data: {
//       total: 'd',
//       rows: 'p'
//     },
//     msg: ''
//   }
//   res.jsonp(data)
// })

module.exports = router
