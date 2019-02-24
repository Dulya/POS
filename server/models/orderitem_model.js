'user strict';
var sql = require('../utils/db_connection.js');

var OrderItem = function (orderitem) {
    this.orderitem_id = orderitem.orderitem_id,
        this.order_id = orderitem.order_id,
        this.item_id = orderitem.item_id,
        this.quantity = orderitem.quantity,
        this.item_name=orderitem.item_data.item_name    
        this.item_price=orderitem.item_data.item_price 
}

OrderItem.addOrderItem = (orderdetail, result) => {
    return new Promise((resolve, reject) => {
        sql.query("insert into  order_item set ? ", orderdetail, (err, res) => {
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
        sql.query("update order_item set quantity = ? where orderitem_id = ?", [orderitem.quantity, orderitem.orderitem_id], (err, res) => {
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