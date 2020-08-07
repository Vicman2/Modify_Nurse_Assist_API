const router = require("express").Router();
const Patient = require("../controllers/UserController");
const auth = require("../middlewares/auth");

router.get("/:userId", auth(['patient', 'nurse', 'doctor']), Patient.getpatientdetails);

module.exports = router;
