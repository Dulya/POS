'user strict';
var sql = require('../utils/db_connection.js');

var User = function (user) {
    this.user_id = user.user_id,
        this.user_name = user.user_name,
        this.password = user.password
}



User.authenticateUser = (user, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from user where user_name=?", [user.user_name], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        })
    });
}

module.exports = User;