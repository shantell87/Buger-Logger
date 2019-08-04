require('dotenv').config();
const mysql = require("mysql");


// DB is local on localhost
connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burger_db'
})


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});


module.exports = connection;

