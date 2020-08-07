const Router = require('express').Router()
const { createQuestion, showQuestion, fetchAllQuestions, updateQuestion, destroyQuestion } = require("../controllers/QuestionController");

Router.get('/', fetchAllQuestions)
Router.post('/', createQuestion)
Router.get('/:id', showQuestion)
Router.put('/:id', updateQuestion)
Router.delete('/:id', destroyQuestion)

module.exports = Router
