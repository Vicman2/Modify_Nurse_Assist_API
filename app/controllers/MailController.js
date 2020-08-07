const MailService = require("../services/MailService");
const response = require("../helpers/response");

class MailController {
	
	async sendMail(req, res) {
		
		let options = {
			from: "NurseAssist App <nurseassistapp@gmail.com>",
			to: req.body.to,
			subject: req.body.subject,
			html: req.body.content
		}
		let result = await MailService.sendMail(options);
		
		if(result) {
			res.status(200).json(response("Email sent", ''))
		}else {
			res.status(500).json(response("Email could not be sent", '', false))
		}
	}
}

module.exports = new MailController()
