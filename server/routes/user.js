var express = require('express');
var router = express.Router();
var userController=require('../controller/user_controller');

router.route('/')
    .get(userController.getAllUsers);

router.route('/authenticate')
    .post(userController.authenticate);

module.exports = router;



