var express = require("express");
var router = express.Router();
var orderController = require('../controllers/order_controller');

router.route('/')
    .post(orderController.createNewOrder);

router.route('/:order_id')
    .get(orderController.retreiveOrderById);


router.route('/user/:user_name')
    .get(orderController.retreiveOrderByUserName);

router.route('/status/:user_id/:status')
    .get(orderController.retreiveOrdersByUserAndStatus);


module.exports = router;