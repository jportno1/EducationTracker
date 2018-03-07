const express = require('express')
const path = require('path')
const parser = require('body-parser')
const logger = require('morgan')
const router = require('./router.js')
const http = require('http')

const app = express()


app.use(parser.json())
app.use(parser.urlencoded({extended: true}))
app.use(logger('tiny'))



app.use('/', express.static(path.join(__dirname, '../client')))



app.use('/', router);


app.listen(9000, function() {
  console.log('EdTech App Listening on port 9000')
})