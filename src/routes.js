const express = require('express')

const routes = express.Router()

const UserController = require('./controllers/UserController')
const PostingController = require('./controllers/PostingController')

routes.get('/', (req, res)=>{
    res.send("Hello World")
})

routes.post('/users', UserController.store)
routes.post('/posts', PostingController.store)

module.exports = routes