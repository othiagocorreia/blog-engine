const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')

routes.get('/', (req, res)=>{
    res.send("Hello World")
})

routes.post('/users', UserController.store)

module.exports = routes