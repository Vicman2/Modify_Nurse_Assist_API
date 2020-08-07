const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const response = require('./app/helpers/response')
require("./app/config/database")();

// Require Routes
const routes = require('./app/routes')

const app = express()

// compress body to increase performance
app.use(compression())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// pass all routes
app.use('/', routes)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})
// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json(response('An error occured', err.message, false))
})

module.exports = app
