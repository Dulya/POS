'use strict';
var OrderItem = require('../models/orderitem_model.js');

exports.addOrderItem = (req, res) => {
        OrderItem.addOrderItem(req.body.order_id,req.body.item_id,req.body.quantity)
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                res.send(err);
            });   
}

exports.removeOrderItem = (req, res) => {
    OrderItem.removeOrderItem(req.params.orderitem_id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.updateOrderItem = (req, res) => {
    OrderItem.updateOrderItem(req.body)
        .then((orderitem) => {
            res.json(orderitem);
        })
        .catch((err) => {
            res.send(err);
        });
}




