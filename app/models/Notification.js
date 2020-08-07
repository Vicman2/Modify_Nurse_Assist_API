const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificationSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: 'users',
        required: [true, "User is required"]
    },
    body: {
        type: String, 
        trim: true, 
        required: [true, "Body is required"], 
    }, 
    isRead: {
        type: Boolean, 
        required: true, 
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model('patients', notificationSchema)
