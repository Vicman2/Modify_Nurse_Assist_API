const path = require("path");
const QuestionService = require("../services/QuestionService");
const response = require("../helpers/response");

class QuestionController {

	async createQuestion(req, res) {
		let question = await QuestionService.createQuestion(req.user, req.body);
		res.status(201).json(response('Question created', question));
	}
	
	async showQuestion(req, res) {
		let question = await QuestionService.showQuestion(req.params.id);
		res.status(200).json(response('A Question fetched', question));
	}
	
	async fetchAllQuestions(req, res) {
		let questions = await QuestionService.fetchAllQuestions();
		res.status(200).json(response('Questions fetched', questions));
	}
	
	async updateQuestion(req, res) {
		let question = await QuestionService.createQuestion(req.user, req.params.id, req.body);
		res.status(200).json(response('Question updated', question));
	}
	
	async destroyQuestion(req, res) {
		let result = await QuestionService.destroyQuestion(req.user, req.params.id);
		res.status(200).json(response('Questions fetched', result));
	}
}

module.exports = new QuestionController();
