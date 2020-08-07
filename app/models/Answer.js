const mongoose = require('mongoose')
const Schema = mongoose.Schema

const answerModel = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: [true, "User is required"],
    }, 
    question: {
        type: Schema.Types.ObjectId, 
        ref: 'questions', 
        required: [true, "Question is required"],
    }, 
    body: {
        type: String, 
        trim: true, 
        required: [true, "Body is required"], 
    }
},{timestamps: true})

module.exports = mongoose.model('answers', answerModel)
