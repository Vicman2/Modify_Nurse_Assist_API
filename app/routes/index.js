

const Router = require('express').Router()
const questionsRoute = require('./questions')
const authRoute = require('./auth');
const patientRoute = require('./patient');
const mailRoute = require('./mail');

Router.get('/', (req, res) => res.send('<h1 style="font-family: sans-serif; text-align: center;">Welcome to the NurseAssist API 🤖️🤖️🤖️🤖️</h1>'));
Router.use('/auth', authRoute);
Router.use('/questions', questionsRoute)
Router.use('/patient', patientRoute)
Router.use('/mail', mailRoute)

module.exports = Router
