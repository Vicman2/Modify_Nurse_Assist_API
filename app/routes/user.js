const router = require("express").Router();
const UserCtrl = require("../controllers/UserController");
const auth = require("../middlewares/auth");

router.put("/:userId/update", auth, UserCtrl.updateprofile);

module.exports = router;
