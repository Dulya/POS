var express=require("express");
var router=express.Router();
var orderController=require('../controller/order_controller');

router.route('/')
    .post(orderController.createNewOrder);

router.route('/:order_id')
    .get(orderController.retreiveOrderById);
    

router.route('/user/:user_id')
    .get(orderController.retreiveOrderByUserid);

router.route('/status/:user_id/:status')
    .get(orderController.retreiveOrdersByUserAndStatus);
    

module.exports = router;