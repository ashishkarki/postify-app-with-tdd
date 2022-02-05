const express = require('express')
const { URI_PATHS } = require('../constants')

// api router
const api = require('./routes/api')

const app = express()

// middlewares
app.use(express.json())

// routes
app.use(URI_PATHS.API_V1, api)

module.exports = app
