"use strict";
var express = require("express");
var Order = require("../models/order_model.js");

exports.retreiveOrderById = (req, res) => {
  Order.getOrderById(req.params.order_id)
    .then(order => {
      res.send(order);
    })
    .catch(err => {
      res.status(404).json({ message: err.sqlMessage });
    });
};

exports.retreiveOrderByLoggedInUser = (req, res) => {
  Order.getAllOrdersByUserName(req.user.email)
    .then(order => {
      res.json(order);
    })
    .catch(err => {
      res.status(404).json({ message: err.sqlMessage });
    });
};
