'use strict';
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config.js');
var User = require('../models/user_model');

exports.logInUser = (req, res) => {
    User.authenticateUser(req.body)
        .then(user => {
            if (user[0]) {
                bcrypt.compare(req.body.password, user[0].password, (error, isCorrectPassword) => {
                    if (error) {
                        res.send(error);
                    }
                    if (!isCorrectPassword) {
                        res.status(403).send();
                    } else {
                        const payload = {
                            user_name: user[0].user_name,
                            user_type: user[0].user_type
                        };
                        var token = jwt.sign(payload, config.JWT_SECRET, {
                            expiresIn: "1d"
                        }, (err, token) => {
                            if (err) {
                                res.send({ error: err });
                            } else {
                                res.cookie('token', token, { httpOnly: true }).send(payload);
                            }
                        });
                    }
                });
            } else {
                res.status(404).json({ "message": "User not found" });
            }
        })
        .catch(err => {
            res.send(err);
        });
}

exports.logoutUser = (req, res) => {
    res.clearCookie("token");
    console.log("no errorrrrrrrr");
    res.json({ "message": 'cookie deleted' });
}