'use strict';
var express = require("express");
var Order = require('../models/order_model.js');


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
    Order.getAllOrdersByUserName(req.user.user_name)
        .then((order) => {
            res.json(order);
        })
       /* .catch((err) => {
            
            res.json({message:err});
        });*/
}






