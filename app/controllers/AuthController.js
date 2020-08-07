const AuthService = require("./../services/authService");
const response = require("./../helpers/response");


class AuthController{
  async register(req, res) {
    const data = await AuthService.register(req.body);
    res.status(201).json(response("Account created successfully.",data));
  }
  async doctorRegister(req, res) {
    const data = await AuthService.doctorRegister(req.body);
    res.status(201).json(response("Account created successfully.",data));
  }
  async nurseRegister(req, res) {
    const data = await AuthService.nurseRegister(req.body);
    res.status(201).json(response("Account created successfully.",data));
  }
  
  async login(req, res) {
          const data = await AuthService.login(req.body);
          res.status(200).json(response("User signed in", data));
  }
}

module.exports = new AuthController();
