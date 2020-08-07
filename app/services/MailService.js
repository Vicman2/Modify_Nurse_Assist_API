const nodemailer = require("nodemailer");
const { isEmpty } = require("validator");
const CustomError = require("../helpers/CustomError");

class MailService {

	transporter() {
		return nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'nurseassistapp@gmail.com',
				pass: '1amgreat'
			}
		});
	}
	
	async doSend(message) {
		try {
			await this.transporter().sendMail(message);
			return true;
		}
		catch(e) {
			return false;
		}
	}
	
	async sendMail({ from, to, subject, html }) {
		if(isEmpty(to)) {
			throw new CustomError("The 'to' field is required");
		}
		if(isEmpty(subject)) {
			throw new CustomError("The 'subject' field is required");
		}
		if(isEmpty(html)) {
			throw new CustomError("The 'content' field is required");
		}
		
		let message = {
			from,
			to,
			subject,
			html
		}
		return await this.doSend(message);
	}
	
}

module.exports = new MailService();
