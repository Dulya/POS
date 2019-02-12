var express=require("express");
var router=express.Router();
var orderController=require('../controller/order_controller');

router.route('/orders')
    .post(orderController.createNewOrder);

router.route('/orders/:orderId')
    .post(orderController.createNewOrder);
    

router.route('/orders/:userId')
    .get(orderController.retreiveOrderByUserid);

router.route('/orders/:status')
    .get(orderController.retreiveOrderByUserid);
    

module.exports = router;