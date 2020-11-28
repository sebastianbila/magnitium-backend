const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { HltvRouter } = require('./routers')
const errorHandlingMiddleware = require('./middlewares/errorHandlingMiddleware')

function applyAPI(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  app.use(cors())

  app.use('/hltv', HltvRouter)
  app.use(errorHandlingMiddleware)
}

module.exports = applyAPI
