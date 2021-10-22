const express = require('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json)
app.use(express.json)
app.use(routes)

app.listen(3333)
/*const express = require ('express')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) 
app.use(express.json)
app.use(routes)

app.listen(3000)*/