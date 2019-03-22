"use strict";
var OrderItem = require("../models/orderitem_model.js");

exports.addOrderItem = (req, res) => {
  OrderItem.addOrderItem(req.body.order_id, req.body.item_id, req.body.quantity)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(400).json({ message: err.sqlMessage });
    });
};

exports.removeOrderItem = (req, res) => {
  OrderItem.removeOrderItem(req.params.orderitem_id)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(400).json({ message: err.sqlMessage });
    });
};

exports.updateOrderItem = (req, res) => {
  OrderItem.updateOrderItem(req.body)
    .then(affectedRows => {
      if (affectedRows === 0) {
        res.status(404).json({ message: "No row found for update" });
      } else {
        res.status(200).json({ message: "Updated successfuly" });
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.sqlMessage });
    });
};
