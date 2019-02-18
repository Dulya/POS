'user strict';
var sql = require('../utils/db_connection.js');

var Order = function (order) {
    this.order_id = order.order_id,
        this.user_name = order.user_name,
        this.status = order.status,
        this.created_date = new Date();
}

Order.createOrder = (newOrder, result) => {
    return new Promise((resolve, reject) => {
        sql.query("insert into orders values (?,?,?,?)", [newOrder.order_id, newOrder.user_name, newOrder.status, newOrder.created_date], (err, res) => {
            if (err) {
                //console.log("Error : ", err);
                reject(err);
            } else {
                //console.log(res);
                resolve(res);
            }
        });
    });

}

Order.getOrderById = (order_id, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from orders where order_id = ?", [order_id], (err, res) => {
            if (err) {
                //console.log("Error : ", err);
                reject(err);
            } else {
                //console.log("order : ", res);
                resolve(res);
            }
        });
    });
}

Order.getAllOrdersByUserName = (user_name, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from orders where user_name=?", [user_name], (err, res) => {
            if (err) {
                //console.log("Error : ", err);
                reject(err);
            } else {
                //console.log("orders : ", res);
                resolve(res);
            }
        });
    });

}

Order.getOrdersByUserAndStatus = (user_name, status, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from orders where user_name=? and status=?", [user_name, status], (err, res) => {
            if (err) {
                //console.log("Error : ", err);
                reject(err);
            } else {
                //console.log("orders by user and status : ", res);
                resolve(res);
            }
        });
    });

}


module.exports = Order;