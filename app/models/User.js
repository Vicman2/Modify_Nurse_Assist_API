const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt =require("bcrypt")
const UserSchema = new Schema({

  fullName: {
    type: String,
    trim: true,
    required: [true, 'Fullname is required']
  },
  email: {
    type: String,
    trim: true,
    required: [true, 'Email is required']
  },
  password: {
    type: String, 
    trim: true, 
    required: [true, "Password is required"]
  },
  phone: {
    type: String,
    trim: true,
    required: [true, 'Phone number is required']
  },
  nationality: {
    type: String,
    trim: true,
    required: [true, 'Nationality is required']
  },
  role: {
    type: String,
    enum: ['nurse','patient', 'doctor', 'admin'],
    default: 'patient',
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'Gender is required']
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"]
  },
  home_address: {
    type: String,
    required: [true, 'Home address is required']
  },
  state_of_origin: {
    type: String,
    required: [true, "State of origin is required"]
  },
  license_id_number: {
    type: String,
    required: [true, "License ID Number is required"]
  },
  license_issue_date: {
    type: String,
    required: [true, "License issue date is required"]
  },
  license_expiry_date: {
    type: Date,
    required: [true, "License expiry date is required"]
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: true
  },
  isActive: {
    type: Boolean,
    required: true,
    default: true
  },
}, { timestamps: true })

UserSchema.pre("save", async function (next) {
  /**
   *  A useful condition for the OAuth Services, prevents the empty string password
   *  from being hashed. Password field would be empty since we are using oAuth
   */
  if (!this.password) {
    this.isVerified = true;
    return next();
  }

  if (!this.isModified("password")) return next();

  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;

  next();
});

module.exports = mongoose.model('users', UserSchema)
