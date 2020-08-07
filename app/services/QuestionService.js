const Question = require("../models/Question");
const CustomError = require('./../helpers/CustomError');
const { isEmpty } = require("validator");

class QuestionService {
	
	async createQuestion(user, data) {
		// Check if the request body is object
		if(typeof data !== "object") {
			throw new CustomError("Invalid request body");
		}
		// Destructure the data object
		const { content } = data;
		
		// check if content is empty
		if(isEmpty(content)) {
			throw new CustomError("content is required");
		}
		
		let question = {}
		question.user = user._id;
		question.content = content;
		
		let newQuestion = new Question(question);
		return await newQuestion.save();
	}
	
	async showQuestion(id) {
		if(typeof id !== "string") {
			throw new CustomError("Invalid request parameter");
		}
		return await Question.findOne({ _id: id});
	}
	
	async fetchAllQuestions() {
		return await Question.find({});
	}	
	
	async updateQuestion(user, id, data) {
		if(typeof id !== "string") {
			throw new CustomError("Invalid request parameter");
		}
		
		let question = await Question.findOne({ _id: id});
		if(question.user !== user._id) {
			throw new CustomError("Unauthorized to edit this question");
		}else {
			let { content, isPublic, isOpened } = data;
			question.content = content;
			question.isPublic = isPublic;
			question.isOpened = isOpened;
			
			return await Question.updateOne({ _id: id }, question);
		}
	}
	
	async destroyQuestion(user, id) {
		if(typeof id !== "string") {
			throw new CustomError("Invalid request parameter");
		}
		if(question.user !== user._id) {
			throw new CustomError("Unauthorized to edit this question");
		}else {	
			return await Question.deleteOne({ _id: id });
		}
	}
}

module.exports = new QuestionService()
