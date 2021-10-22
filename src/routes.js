const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const PostingController = require('./controllers/PostingController')

routes.get('/', (req, res)=>{
    res.send("Hello World")
})

routes.get('/teste', (req, res)=>{
    res.send("O teste foi feito e o sucesso foi obtido")
})

routes.post('/users', UserController.store)
routes.post('/posts', PostingController.store)

module.exports = routes