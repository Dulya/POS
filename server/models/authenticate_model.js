'user strict';
var sql = require('../utils/db_connection.js');

var User= function (user){
    this.user_id=user.user_id,
    this.user_name=user.user_name,
    this.password=user.password
}

User.getAllUsers = () => {
    return new Promise((resolve,reject) => {
        sql.query("select * from user",(err,res) => {
            if(err){
                console.log("Error : ",err);
                reject(err);
            }else{
                console.log("users : ",res);
                resolve(res);
            }
        });
    });

}

User.authenticateUserName = (user_name,result) =>{
    return new Promise((resolve,reject) => {
        sql.query("select * from user where user_name=?",[user_name],(err,res) => {
            if(err){
                console.log("Error : ",err);
                reject(err);
            }else{
                console.log("user : ",res);
                resolve(res);
            }
        })
    });
}

module.exports = User;