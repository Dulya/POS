var express = require("express");
var router = express.Router();
var user_controller = require("../controllers/user_controller");

router.route("/login").post(user_controller.logInUser);

router.route("/logout").get(user_controller.logoutUser);

module.exports = router;
