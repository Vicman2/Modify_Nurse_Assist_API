const fs = require("fs");
const ejs = require("ejs");

module.exports = {

	renderTemplate: async (path, data)  => {
		let template = fs.readFileSync(path, 'utf-8');
		return ejs.render(template, data);
	}


}

