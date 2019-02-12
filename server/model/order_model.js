'user strict';
var sql = require('./db_connection.js');

var Order = function (order) {
    this.order_id = order.order_id,
    this.user_id = order.user_id,
    this.status = order.status,
    this.created_date = new Date();
    this.total_amount = order.total_amount;
}

Order.createOrder = function createOrder(newOrder,result) {
    sql.query("insert into orders set ? ", newOrder, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}

Order.getOrderById = function getOrderById(order_id, result) {
    sql.query("select * from orders where order_id = ?", order_id, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
        } else {
            console.log("order : ", res);
            result(null, res);
        }
    });

}

Order.getAllOrdersByUserId = function getAllOrdersByUserId(user_id, result) {
    sql.query("select * from orders where user_id=?", user_id, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
        } else {
            console.log("orders : ", res);
            result(null, res);
        }
    });
}

Order.getOrdersByUserAndStatus = function getOrdersByStatus(user_id,status, result) {
    sql.query("select * from orders where user_id=? and status=?", status, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
        } else {
            console.log("orders by status : ", res);
            result(null, res);
        }
    });
}


module.exports= Order;