var express = require("express");
var jwt = require('jsonwebtoken');
var config = require('../config.js');

module.exports = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.cookies.token;
    if (!token) {
        return res.status("401").json({ message: "No token is provided" });
    } else {

        req.user = jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: {
                        msg: 'Failed to authenticate token!'
                    }
                });
            } else {
                console.log("success");
                next();
            }
        });
    }
}