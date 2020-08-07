const Router = require('express').Router()
const { sendMail } = require("../controllers/MailController");

Router.post('/send', sendMail)

module.exports = Router
