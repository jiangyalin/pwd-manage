const express = require('express')
const router = express.Router()
const fs = require('fs')

router.get('/get', function (req, res) {
  console.log('get.params', req.params)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p',
      test: 'http://180.169.20.145:8099/test/2020/20200710113211281.jpg',
      fl: 33,
      fr: 73
    },
    msg: ''
  }
  res.jsonp(data)
})

router.post('/api', function (req, res) {
  tool.writeData('test', {
    query: req.query,
    body: req.body,
    headers: req.headers
  })
  const data = {
    code: 200,
    data: {},
    msg: ''
  }
  res.jsonp(data)
})

router.delete('/delete', function (req, res) {
  console.log('get.query', req.query)
  const data = {
    code: 200,
    data: {
      total: 'd',
      rows: 'p'
    },
    msg: ''
  }
  res.jsonp(data)
})

module.exports = router
