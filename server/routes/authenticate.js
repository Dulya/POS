var express = require('express');
var router = express.Router();
var authenticate_controller=require('../controller/authenticate_controller');

router.route('/')
    .get(authenticate_controller.getAllUsers);

router.route('/user')
    .post(authenticate_controller.authenticateUser);

module.exports = router;



