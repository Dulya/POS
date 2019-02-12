var express=require("express");
var router=express.Router();
var OrderDetailController=require('../controller/orderdetail_controller');


router.route('/orderdetails')
    .post(OrderDetailController.addOrderDetails);

router.route('/orderdetails/:orderdetailId')
    .post(OrderDetailController.addOrderDetails);
    

module.exports = router;