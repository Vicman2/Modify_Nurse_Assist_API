const User = require("./../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const CustomError = require('./../helpers/CustomError');

class AuthService{

    validate(formData) {
        if (!formData.password)
          throw new CustomError("password field should not be empty");
        if (!formData.phone)
          throw new CustomError("phone field should not be empty");
        // if (!formData.role)
          // throw new CustomError("User role property is not permitted.");
        if (!formData.gender)
          throw new CustomError("gender field should not be empty");
        if (!formData.country)
          throw new CustomError("country field should not be empty");
        if (!formData.licenceIdNumer)
          throw new CustomError("licenceIdNumer field should not be empty");
        if (!formData.licenceIssueDate)
          throw new CustomError("licenceIssueDate field should not be empty");
        if (!formData.licenceExpiryDate)
          throw new CustomError("User role property is not permitted.");
        
    }

    async register(formData) {
        this.validate(formData);
        const userExist = await User.findOne({ email: formData.email });
        if (userExist){ 
              throw new CustomError("Email already exists")
            }  
        let user = new User(formData);
      user.role='nurse'
        await user.save();
        user = _.pick(user, [
          "_id",
          "fullName",
          "gender",
          "email",
          "role",
          "country",
          "phone",
        ]);
    
        return user
      }
      
    async doctorRegister(formData) {
      this.validate(formData);
      const userExist = await User.findOne({ email: formData.email });
      if (userExist){ 
            throw new CustomError("Email already exists") 
          }  
      let user = new User(formData);
      user.role='doctor'
      await user.save();
      user = _.pick(user, [
        "_id",
        "fullName",
        "gender",
        "email",
        "role",
        "country",
        "phone",
      ]);
  
      return user
    }

    async nurseRegister(formData) {
      this.validate(formData);
      const userExist = await User.findOne({ email: formData.email });
      if (userExist){ 
            throw new CustomError("Email already exists") 
          }  
      let user = new User(formData);
      user.role='nurse'
      await user.save();
      user = _.pick(user, [
        "_id",
        "fullName",
        "gender",
        "email",
        "role",
        "country",
        "phone",
      ]);
  
      return user
    }
      async login(data) {
        if (!data.email) throw new CustomError("Email is required");
        if (!data.password) throw new CustomError("Password is required");

        let user = await User.findOne({email: data.email});
        if (!user) throw new CustomError("Incorrect email or password");
        const isCorrect = await bcrypt.compare(data.password, user.password);
        // bcrypt.compare(password, user.password)
        if (!isCorrect) throw new CustomError("Incorrect email or password");

        if (user.isVerified === false) {
            return {
               message:
                "Please verify your email and then login, or resend verification email",
                resend_url_live: `${process.env.BASE_URL_LIVE}/api/users/resend-verification-mail/${user._id}`,
                isVerified: user.isVerified,
          };
    } else {
      const token = await jwt.sign(
        {
          id: user._id,
          role: user.role,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: `1d`,
        }
      );
        let Token = `Bearer ${token}`;
      let userData = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        gender: user.gender,
        role: user.role,
        country: user.country,
        phone: user.phone,
        gender: user.gender,
        Token,
      };
        return{userData}
     
      }
    }
}

module.exports = new AuthService();
