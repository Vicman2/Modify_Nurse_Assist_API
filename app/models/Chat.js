const mongoose = require('mongoose')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    nurse: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    doctor: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }, 
    body: {
        type: String, 
        trim: true, 
        required: [true, "Body is required"], 
    }, 
    attachment: {
        type: String
    }
},{timestamps: true})

module.exports = mongoose.model('patients', chatSchema)
