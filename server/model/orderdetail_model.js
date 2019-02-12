'user strict';
var sql = require('./db_connection.js');

var OrderDetail = function (orderdetail) {
    this.orderdetail_id = orderdetail.orderdetail_id,
    this.order_id = orderdetail.order_id,
    this.item_id = orderdetail.item_id,
    this.quantity = orderdetail.quantity,
    this.unit_price = orderdetail.unit_price;
}

OrderDetail.addOrderDetails= function addOrderDetails(orderdetail,result) {
    sql.query("insert into order_details set ? ", orderdetail, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}

OrderDetail.getOrderDetailsByOrder= function getOrderDetails(order_id,result) {
    sql.query("select * from order_details where order_id = ?", order_id, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
        } else {
            console.log("order : ", res);
            result(null, res);
        }
    });
}

OrderDetail.removeOrderItems= function removeOrderItems(orderdetail_id,result) {
    sql.query("delete from order_details where orderdetail_id = ? ", orderdetail_id, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}

OrderDetail.updateOrderItems= function updateOrderItems(orderdetail,result) {
    sql.query("update order_details where orderdetail_id = ? set ?", orderdetail.orderdetail_id,orderdetail, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}





module.exports= OrderDetail;