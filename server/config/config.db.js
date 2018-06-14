var mysql = require('mysql');

exports.connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1990CAxgu2017.",
    port:3306,
    database: "ShoppingPocket"
  });