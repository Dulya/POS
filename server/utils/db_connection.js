'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Chamo@1993',
    database: 'pos_db'
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;

/*
 host: 'localhost',
    user: 'root',
    password: 'Chamo@1993',
    database: 'pos_db',*/