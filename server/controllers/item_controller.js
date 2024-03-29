"use strict";
var express = require("express");
var Item = require("../models/item_model.js");

exports.getAllItems = (req, res) => {
  Item.getAllItems()
    .then(item => {
      res.json(item);
    })
    .catch(err => {
      res.status(500).json({ message: "Internal database error" });
    });
};
