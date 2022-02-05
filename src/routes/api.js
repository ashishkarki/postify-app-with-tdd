const express = require('express')

const { URI_PATHS } = require('../../constants')

// constituent routers
const usersRouter = require('./users/users.router')

const api = express.Router()

// endpoints
api.use(URI_PATHS.USERS, usersRouter)

module.exports = api
