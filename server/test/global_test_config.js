
before(function (done) {
    var mysql = require('mysql');

    //configuring test database
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Chamo@1993',
        database: 'test_db'
    });

    connection.connect(err => {
        if (err) throw err;
        console.log("Connected!");
    });

    module.exports = connection;
    done()
})
