var express = require("express");
var router = express.Router();
var orderController = require('../controllers/order_controller');

const permissionAuth = (req, res, next) => {
    if(req.user_type === 'admin' || (req.params.user_name && req.params.user_name ===req.user.user_name)){
        next();
    }else{
        res.status(400);
        res.send({message :"Unauthorized acess"});
    }
}


router.route('/').post(orderController.createNewOrder);

router.route('/id/:order_id').get(orderController.retreiveOrderById);

router.get('/user', orderController.retreiveOrderByLoggedInUser);

router.get('/user/:user_name', permissionAuth, orderController.retreiveOrderByUserName);

router.route('/status/:user_id/:status')
    .get(orderController.retreiveOrdersByUserAndStatus);


module.exports = router;