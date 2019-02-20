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

OrderItem.getOrderItemsByOrder = (order_id, result) => {
    return new Promise((resolve, reject) => {
        //(select * from order_item where order_id=?) as t1 union (select distinct item_name,distinct price from item join t1 on item.item_id=t1.item_id )
        sql.query("select distinct * from (select  * from order_item where order_id=?) as t1 , (select distinct item_name, price from item join order_item on order_item.item_id=item.item_id) as t2", [order_id], (err, res) => {
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