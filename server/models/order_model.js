'user strict';
var sql = require('../utils/db_connection.js');

const Order = function (order) {
        this.order_id = order.order_id,
        this.user_name = order.user_name,
        this.status = order.status,
        this.created_date = new Date(),
        this.total_amount=order.total_amount;
}

Order.createOrder = (newOrder, result) => {
    return new Promise((resolve, reject) => {
        sql.query("insert into orders values (?,?,?,?)", [newOrder.order_id, newOrder.user_name, newOrder.status, newOrder.created_date], (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });

}

Order.getOrderById = (order_id, result) => {
    return new Promise((resolve, reject) => {

        const data={
            order_id:"",
            created_date:"",
            status:"",
            total_amount:null,
            items:[]
        }

        sql.query("select orders.*,(select sum(order_item.quantity*item.price) from order_item join item on order_item.item_id=item.item_id where orders.order_id = order_item.order_id) as total_amount from orders where orders.order_id=? limit 1",[order_id],(err,order)=>{
            if(order){  
                data.order_id=order[0].order_id;
                data.created_date=order[0].created_date;
                data.status=order[0].status;
                data.total_amount=order[0].total_amount;
                sql.query("select i.item_name,i.price,oi.* from order_item oi inner join item i on oi.item_id=i.item_id where oi.order_id=?",[order_id],(err,items)=>{
                    if(items){
                        data.items=items;
                        resolve(data);
                    }else{
                        reject(err);
                    }
                });
                
            }else{
                reject(err);
            }
        })   
    });
}


Order.getAllOrdersByUserName = (user_name, result) => {
    return new Promise((resolve, reject) => {
        sql.query("select orders.*,(select sum(order_item.quantity*item.price) from order_item join item on order_item.item_id=item.item_id where orders.order_id = order_item.order_id) as total_amount from orders where orders.user_name=?", [user_name], (err, res) => {
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

//select i.item_name,i.price,oi.* from order_item oi inner join item i on oi.item_id=i.item_id where oi.order_id=?
        //(select * from order_item where order_id=?) as t1 union (select distinct item_name,distinct price from item join t1 on item.item_id=t1.item_id )
