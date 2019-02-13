'use strict';
var jwt = require('jsonwebtoken');
var config = require('../config.js');
var User = require('../models/user_model.js');

exports.getAllUsers = (req, res) => {
    User.getAllUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.send(err);
        });
}

exports.authenticate = (req, res) => {
    User.authenticateUserName(req.body.user_name)
        .then(user => {
            if (req.body.password === user[0].password) {

                const payload = {
                    name: user[0].user_name
                };

                var token = jwt.sign(payload, config.JWT_SECRET, {
                    expiresIn: "1d"
                }, (err, token) => {
                    if (err) {
                        console.log(err);
                    } else {

                        console.log("token :", token);
                        res.json({
                            success: true,
                            message: 'Your Token!',
                            token: token
                        });
                    }                
                });

            } else {
                res.json({ success: false, message: "Password is incorrect" });
            }
        })
        .catch(err => {
            res.send(err);
        });
}