

const router = require("express").Router();
const AuthCtrl = require("../controllers/AuthController");
const auth = require("../middlewares/auth");
// patient reg route
router.post("/patient_register", AuthCtrl.register);
//nurse route
router.post("/nurse_register", AuthCtrl.nurseRegister);
//doctors route
router.post("/doctor_register", AuthCtrl.doctorRegister);
// login 
router.post("/login", AuthCtrl.login);

module.exports = router;