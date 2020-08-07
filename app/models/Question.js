const mongoose = require('mongoose')
const Schema = mongoose.Schema

const QuestionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users'
    },
    content: {
        type: String, 
        trim: true, 
        require: [true, "Description is required"] 
    }, 
    isPublic: {
        type: Boolean, 
        required: true, 
        default: true
    },
    isOpened:{
        type: Boolean, 
        required: true, 
        default: true
    }
}, {timestamps: true})

module.exports = mongoose.model('questions', QuestionSchema)
