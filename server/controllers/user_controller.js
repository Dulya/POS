'use strict';
var jwt = require('jsonwebtoken');
var config = require('../config.js');
var User = require('../models/user_model');

exports.logInUser = (req, res) => {
    User.authenticateUser(req.body)
        .then(user => {
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
                    res.cookie('token', token, { httpOnly: true }).sendStatus(200);
                }
            });

        })
        .catch(err => {
            res.send(err);
        });
}