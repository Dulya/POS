var express=require("express");
var router=express.Router();

router.get("/", function(req, res, next) {
    res.json({
        "name":'dulya'
    });
});

router.post('/', function(req, res, next) {
    if (!req.body) return res.sendStatus(400);
    res.json({requestBody: req.body})
    console.log(requestBody);
    res.send("server response "+requestBody);
  });

module.exports = router;