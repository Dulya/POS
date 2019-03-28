"user strict";
var sql = require("../utils/db_connection.js");

var Item = function(item) {
  (this.item_id = item.item_id),
    (this.item_name = item.item_name),
    (this.price = item.price),
    (this.category = item.category);
};

Item.getAllItems = () => {
  return new Promise((resolve, reject) => {
    sql.query("select item_id,item_name,truncate(price,2) as price,category from item", (err, res) => {
      if (err) {
        //console.log("Error : ", err);
        reject(err);
      } else {
        //console.log(res);
        resolve(res);
      }
    });
  });
};

module.exports = Item;
