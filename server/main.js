const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/')

const config = {
  port: 8021
}

// 跨域
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild, languageCode, x-auth-token')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS, PATCH')

  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

app.use(express.static(path.join(__dirname, 'static')))

app.use(bodyParser.json({ limit: '50mb' })) // 设置最大提交值
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))

routes(app)

app.listen(config.port, () => {
  console.log('服务启动' + config.port)
})

