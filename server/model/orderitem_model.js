'user strict';
var sql = require('../utils/db_connection.js');

var OrderItem = function (orderitem) {
    this.orderdetail_id = orderitem.orderitem_id,
    this.order_id = orderitem.order_id,
    this.item_id = orderitem.item_id,
    this.quantity = orderitem.quantity,
    this.unit_price = orderitem.unit_price;
}

OrderItem.addOrderDetails= function addOrderDetails(orderdetail,result) {
    sql.query("insert into  order_item set ? ", orderdetail, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}

OrderItem.getOrderDetailsByOrder= function getOrderDetails(order_id,result) {
    sql.query("select * from order_item where order_id = ?", order_id, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, err);
        } else {
            console.log("order : ", res);
            result(null, res);
        }
    });
}

OrderItem.removeOrderItems= function removeOrderItems(orderdetail_id,result) {
    sql.query("delete from  order_item where orderitem_id = ? ", orderdetail_id, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}

OrderItem.updateOrderItems= function updateOrderItems(orderdetail,result) {
    sql.query("update order_item where orderitem_id = ? set ?", orderdetail.orderdetail_id,orderdetail, function (err, res) {
        if (err) {
            console.log("Error : ", err);
            result(null, res);
        } else {
                console.log(res);
                result(null, res);          
        }
    });
}





module.exports= OrderItem;