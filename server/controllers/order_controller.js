'use strict';
var express = require("express");
var Order = require('../models/order_model.js');

/*exports.createNewOrder = (req, res) => {
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
}*/

exports.retreiveOrderById = (req, res) => {
    Order.getOrderById(req.params.order_id)
        .then((order) => {
            res.send(order);
        })
        .catch((err) => {
            res.status(404).json({message:err});
        });
}

exports.retreiveOrderByLoggedInUser = (req, res) => {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh",req.user);
    Order.getAllOrdersByUserName(req.user.user_name)
        .then((order) => {
            res.json(order);
        })
        .catch((err) => {
            res.send(err);
        });
}






