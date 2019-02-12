'use strict';
var express = require("express");
var OrderDetail = require('../model/orderdetail_model.js');

exports.addOrderDetails = function (req, res) {
    var newOrderDetail = new OrderDetail(req.body);
    if (!newOrderDetail.order_id) {
        res.status(400).send({ error: true, message: "Cannot add order details into order!" });
    } else {
        OrderDetail.addOrderDetails(newOrderDetail, function (err, orderdetail) {
            if (err) {
                res.send(err);
            }
            res.json(orderdetail);
        });
    }
}

exports.getOrderDetailsByOrder=function(req,res){
    OrderDetail.getOrderDetailsByOrder(req.params.order_id, function (err, orderdetail) {
        if (err) {
            res.send(err);
        }
        res.json(orderdetail);
    });
}

exports.removeOrderItems=function(req,res){
    OrderDetail.removeOrderItems(req.params.orderdetail_id, function (err, orderdetail) {
        if (err) {
            res.send(err);
        }
        res.json(orderdetail);
    });
}

exports.updateOrderItems=function(req,res){
    OrderDetail.updateOrderItems(req.params.orderdetail_id, function (err, orderdetail) {
        if (err) {
            res.send(err);
        }
        res.json(orderdetail);
    });
}




