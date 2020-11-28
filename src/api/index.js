const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { HltvRouter, MatchesRouter } = require('./routers')
const { errorHandlingMiddleware } = require('./middlewares')

function applyAPI(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  app.use(cors())

  app.use('/', MatchesRouter)
  app.use('/hltv', HltvRouter)

  app.use('/uploads', express.static('uploads'))
  app.use(errorHandlingMiddleware)
}

module.exports = applyAPI
