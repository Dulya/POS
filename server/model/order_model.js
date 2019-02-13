'user strict';
var sql = require('../utils/db_connection.js');

var Order = function (order){
    this.order_id = order.order_id,
        this.user_id = order.user_id,
        this.status = order.status,
        this.created_date = new Date();
}

Order.createOrder = (newOrder, result) => {
    return new Promise((resolve, reject) => {
        sql.query("insert into orders set ? ", newOrder, (err, res) => {
            if (err) {
                console.log("Error : ", err);
                reject(err);
            } else {
                console.log(res);
                resolve(res);
            }
        });
    });

}

Order.getOrderById = (order_id, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from orders where order_id = ?", [order_id], (err, res) => {
            if (err) {
                console.log("Error : ", err);
                reject(err);
            } else {
                console.log("order : ", res);
                resolve(res);
            }
        });
    });
}

Order.getAllOrdersByUserId = (user_id, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from orders where user_id=?", [user_id], (err, res) => {
            if (err) {
                console.log("Error : ", err);
                reject(err);
            } else {
                console.log("orders : ", res);
                resolve(res);
            }
        });
    });

}

Order.getOrdersByUserAndStatus = (user_id, status, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from orders where user_id=? and status=?", [user_id, status], (err, res) => {
            if (err) {
                console.log("Error : ", err);
                reject(err);
            } else {
                console.log("orders by user and status : ", res);
                resolve(err);
            }
        });
    });

}


module.exports = Order;