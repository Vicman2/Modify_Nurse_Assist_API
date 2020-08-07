const mongoose = require("mongoose");

const database = () => {
	mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("MongoDB connection established...");
	})
	.catch(err => {
		console.log("Unable to establish MongoBD connection...");
		process.exit(1)
	})
}

module.exports = database;
