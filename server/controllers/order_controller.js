'use strict';
var express = require("express");
var Order = require('../models/order_model.js');

exports.createNewOrder = (req, res) => {
    let newOrder = new Order(req.body);
    if (!newOrder.order_id) {
        res.status(400).send({ error: true, message: "Cannot create order!" });
    } else {
        Order.createOrder(newOrder)
            .then((order) => {
                res.json(order);
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

exports.retreiveOrderById = (req, res) => {
    Order.getOrderById(req.params.order_id)
        .then((order) => {
            if (order.length > 0) {
                var order_id = order[0].order_id;
                var created_date = order[0].created_date;
                var status = order[0].status;
                var items = [];
                var i;
                for (i = 0; i < order.length; i++) {
                    items.push(
                        {
                            orderitem_id: order[i].orderitem_id,
                            item_name: order[i].item_name,
                            price: order[i].price,
                            quantity: order[i].quantity
                        });
                }
            }
            const order_detail = {
                order_id,
                created_date,
                status,
                items
            }
            res.send(order_detail);
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.retreiveOrderByUserName = (req, res) => {
    Order.getAllOrdersByUserName(req.params.user_name)
        .then((order) => {
            res.json(order);
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.retreiveOrderByLoggedInUser = (req, res) => {
    Order.getAllOrdersByUserName(req.user.user_name)
        .then((order) => {
            res.json(order);
        })
        .catch((err) => {
            res.send(err);
        });
}

exports.retreiveOrdersByUserAndStatus = (req, res) => {
    Order.getOrdersByUserAndStatus(req.params.user_name, req.params.status)
        .then((order) => {
            res.json(order);
        })
        .catch((err) => {
            res.send(err);
        });
}




