const jwt = require("jsonwebtoken")
const User = require("./../models/User")
const CustomError = require("../helpers/CustomError")

function auth(roles = ['patient', 'nurse','doctor','admin']) {
     return async (req, res, next) => {
          if (!req.headers.authorization) throw new CustomError("Unauthorized user: Token not found", 401);
          
          const token = req.headers.authorization.split(" ")[1];
          const decoded = await jwt.verify(token, process.env.JWT_SECRET);
          //find user
          let user = await User.findOne({ _id: decoded.id });
          //check if user exists and active
          if (!user || !user.isActive) throw new CustomError("unauthorized user", 401);
          //check if user role has permission
          if (!roles.length && !roles.includes(user.role)) throw new CustomError("unauthorized user", 401);
          //save decoded toeknt to request object
          req.user = user;
          next();
     }
}


module.exports = auth 