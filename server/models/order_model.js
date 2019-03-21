"user strict";
var app = require("../app.js");
var sql = require("../utils/db_connection.js");

const Order = function(order) {
  (this.order_id = order.order_id),
    (this.user_name = order.user_name),
    (this.status = order.status),
    (this.created_date = new Date()),
    (this.total_amount = order.total_amount);
};

Order.getOrderById = (order_id, result) => {
  return new Promise((resolve, reject) => {
    const data = {
      order_id: "",
      created_date: "",
      status: "",
      total_amount: null,
      items: []
    };

    sql.query(
      "select orders.*,(select sum(order_item.quantity*item.price) from order_item join item on order_item.item_id=item.item_id where orders.order_id = order_item.order_id) as total_amount from orders where orders.order_id=? limit 1",
      [order_id],
      (error, order) => {
        if (error) {
          reject(error);
        }
        if (order && order[0]) {
          data.order_id = order[0].order_id;
          data.created_date = order[0].created_date;
          data.status = order[0].status;
          data.total_amount = order[0].total_amount;
          sql.query(
            "select i.item_name,i.price,oi.* from order_item oi inner join item i on oi.item_id=i.item_id where oi.order_id=?",
            [order_id],
            (err, items) => {
              if (!err) {
                data.items = items;
                resolve(data);
              } else {
                reject(err);
              }
            }
          );
        } else {
          reject("Order is not found");
        }
      }
    );
  });
};

Order.getAllOrdersByUserName = (email, result) => {
  return new Promise((resolve, reject) => {
    sql.query(
      "select orders.*,(select sum(order_item.quantity*item.price) from order_item join item on order_item.item_id=item.item_id where orders.order_id = order_item.order_id) as total_amount from orders where orders.user=?",
      [email],
      (err, res) => {
        if (err) {
          console.log("Error : ", err);
          reject(err.sqlMessage);
        } else {
          console.log("orders : ", res);
          resolve(res);
        }
      }
    );
  });
};

module.exports = Order;
