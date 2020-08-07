const User = require('../models/User')
const Patient = require('../models/Patient')
const CustomError = require('../helpers/CustomError')
const _ = require("lodash");

class UserService {
    async updateprofile(userId, data) {
        const user =  User.findOne({_id: userId});
        if(!user) throw new CustomError(`${field} is required`);

        const {fullname, gender, dob, phone, email, home_address, state_of_origin, nationality, license_id_number, license_issue_date, license_expiry_date} = data

        user.fullname = fullname
        user.email = email
        user.phone = phone
        user.nationality = nationality
        user.gender = gender
        user.dob = dob
        user.home_address = home_address
        user.state_of_origin = state_of_origin
        user.license_id_number = license_id_number
        user.license_issue_date = license_issue_date
        user.license_expiry_date = license_expiry_date

        await user.save();

        const result = _.pick(user, [
            "fullname", "gender", "dob", "phone", "email", "home_address", "state_of_origin", "nationality", "license_id_number", "license_issue_date", "license_expiry_date"
        ])

        return result;
    }

    async getpatientdetails(patient) {
        patient = Patient.findById(patient.patientId)
        if(!patient) throw new CustomError('Patient not found')

        return patient;
    }

    async getUser(id){
        // Get the user 
        const user = await User.findById(id).select("-password"); // exclude the password 
        if(!user) throw new CustomError('User do not exist');
        return user
    }
    async getAllUsers(){
        const users = await User.find().select("-password")
        if(users.length === 0 ) throw new CustomError("There is no user in the platform")
        return users
    }
    async deleteUser(id){
        const user = await User.findByIdAndRemove(id)
        if(!user) throw new CustomError("User do not exist");
        return null
    }
}


module.exports = new UserService();
