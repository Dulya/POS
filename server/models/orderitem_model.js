'user strict';
var sql = require('../utils/db_connection.js');

var OrderItem = function (orderitem) {
    this.orderitem_id = orderitem.orderitem_id,
        this.order_id = orderitem.order_id,
        this.item_id = orderitem.item_id,
        this.quantity = orderitem.quantity,
        this.unit_price = orderitem.unit_price;
}

OrderItem.addOrderItem = (orderdetail, result) => {
    return new Promise((resolve, reject) => {
        sql.query("insert into  order_item set ? ", orderdetail, (err, res) => {
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

OrderItem.getOrderItemsByOrder = (order_id, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select * from order_item where order_id = ?", [order_id], (err, res) => {
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

OrderItem.removeOrderItem = (orderitem_id, result) => {
    return new Promise((resolve, reject) => {
        sql.query("delete from  order_item where orderitem_id = ? ", [orderitem_id], (err, res) => {
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

OrderItem.updateItemQuantity = (orderitem, result) => {
    return new Promise((resolve, reject) => {
        sql.query("update order_item set quantity = ? where orderitem_id = ?", [orderitem.quantity,orderitem.orderitem_id], (err, res) => {
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





module.exports = OrderItem;