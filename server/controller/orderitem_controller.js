'use strict';
var express = require("express");
var OrderItem = require('../model/orderitem_model.js');

exports.addOrderItem = (req, res) => {
    let newOrderItem = new OrderItem(req.body);
    if (!newOrderItem.order_id) {
        res.status(400).send({ error: true, message: "Cannot add order details into order!" });
    } else {
        OrderItem.addOrderItem(newOrderItem)
            .then((orderitem) => {
                res.json(orderitem);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

exports.filterOrderItemsByOrder = (req, res) => {
    OrderItem.getOrderItemsByOrder(req.params.order_id)
        .then((orderitem) => {
            res.json(orderitem);
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.removeOrderItem = (req, res) => {
    OrderItem.removeOrderItem(req.params.orderdetail_id)
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.updateOrderItem = (req, res) => {
    OrderItem.updateOrderItem(req.params.orderdetail_id)
    .then((orderitem) => {
        res.json(orderitem);
    })
    .catch((err) => {
        res.send(err);
    });
}




