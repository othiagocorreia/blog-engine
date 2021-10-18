const express = require('express')
const routes = require('./routes')
const app = express()

require('./database')

//Ensina o servidor a aceitar requisições em json
app.use(express.json)
app.use(routes)

app.listen(3000, console.log("It's working"))