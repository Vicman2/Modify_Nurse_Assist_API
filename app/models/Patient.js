const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
    fullName: {
        type: String, 
        trim: true,
        required: [true, "Firstname is required"], 
    },
    adminNo: {
        type: String,
        required: [true, 'Admin number is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    gender: {
        type: String, 
        enum: ["male", "female"],
        required: [true, "Gender is required"], 
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    bloodgroup: {
        type: String,
        required: [true, 'Blood group is required']
    },
    genotype: {
        type: String,
        required: [true, 'Genotype is required']
    },
    height: {
        type: String,
        required: [true, 'height is required']
    },
    weight: {
        type: String,
        required: [true, 'weight is required']
    },
    bloodpressure: {
        type: String,
        required: [true, 'Blood pressure is required']
    },
    temperature: {
        type: String,
        required: [true, 'Temperature is required']
    },
    sugarlevel: {
        type: String,
        required: [true, 'Sugar level is required']
    },
    pulse: {
        type: String,
        required: [true, 'Pulse is required']
    },
    attachment: {
        type: String
    },
    voicenote: {
        type: String
    },
    nurse: {
        type : Schema.Types.ObjectId,
        ref: 'users',
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('patients', patientSchema)
