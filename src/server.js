const express = require('express')
const routes = require('./routes')
const app = express()

require('./database')

//Instructs the server to accept json requests
app.use(express.json)
app.use(routes)

app.listen(3333, console.log("It's working"))
