'use strict';
var express = require("express");
var Order = require('../model/order_model.js');

exports.createNewOrder = function (req, res) {
    var newOrder = new Order(req.body);
    if (!newOrder.order_id) {
        res.status(400).send({ error: true, message: "Cannot create order!" });
    } else {
        Order.createOrder(newOrder, function (err, order) {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
}

exports.retreiveOrderById = function (req, res) {
    Order.getOrderById(req.params.order_id, function (err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
}

exports.retreiveOrderByUserid = function (req, res) {
    Order.getAllOrdersByUserId(req.params.user_id, function (err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
}

exports.retreiveOrdersByUserAndStatus = function (req, res) {
    Order.getOrdersByUserAndStatus(req.params.user_id, req.params.status, function (err, order) {
        if (err) {
            res.send(err);
        }
        res.json(order);
    });
}




