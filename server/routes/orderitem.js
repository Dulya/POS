var express=require("express");
var router=express.Router();
var OrderItemController=require('../controller/orderitem_controller');


router.route('/')
    .post(OrderItemController.addOrderItem);

module.exports = router;