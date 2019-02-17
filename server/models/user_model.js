'user strict';
var sql = require('../utils/db_connection.js');

var User = function (user) {
    this.user_id = user.user_id,
        this.user_name = user.user_name,
        this.password = user.password
}

User.getAllUsers = () => {
    return new Promise((resolve, reject) => {
        sql.query("select * from user", (err, res) => {
            if (err) {
                console.log("Error : ", err);
                reject(err);
            } else {
                console.log("users : ", res);
                resolve(res);
            }
        });
    });

}

User.authenticateUser = (user, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from user where user_name=? and password=?", [user.user_name,user.password], (err, res) => {
            if (err) {
                console.log("Error : ", err);
                reject(err);
            } else {
                console.log("user : ", res);
                resolve(res);
            }
        })
    });
}

module.exports = User;