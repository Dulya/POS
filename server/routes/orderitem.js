var express = require("express");
var router = express.Router();
var OrderItemController = require('../controllers/orderitem_controller');


router.route('/')
    .post(OrderItemController.addOrderItem);

router.route('/:order_id')
    .get(OrderItemController.filterOrderItemsByOrder);

router.route('/:orderitem_id')
    .delete(OrderItemController.removeOrderItem);

router.route('/')
    .put(OrderItemController.updateItemQuantity);


module.exports = router;