'user strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'dulya_chamo',
    password: 'chamodyani1993',
    database: 'pos_database'
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

/*host: 'db4free.net',
    user: 'dulya_chamo',
    password: 'chamodyani1993',
    database: 'pos_database',*/