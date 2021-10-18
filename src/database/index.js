const Sequelize = require('sequelize')
const dbconf = require('../config/database')

const conn = new Sequelize(dbconf)

const User = require('../models/User')

User.init(conn)

module.exports = conn