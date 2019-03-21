var express = require("express");
var router = express.Router();
var ItemController = require("../controllers/item_controller");

router.route("/").get(ItemController.getAllItems);

module.exports = router;
