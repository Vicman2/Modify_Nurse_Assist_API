const UserService = require("./../services/UserService");
const response = require("./../helpers/response");


class UserController{
    async updateprofile(req, res) {
        const data = await UserService.updateprofile(req.params.userId, req.body)
        res.status(201).send(response("Profile updated successfully.",data));
    }

    async getpatientdetails(req, res) {
        const data = await UserService.getpatientdetails(req.params)
        res.status(200).send(response("Patient details retrieved.", data));
    }
    
}

module.exports = new UserController();
