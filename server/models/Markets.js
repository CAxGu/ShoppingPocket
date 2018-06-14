var mysql = require('../config/config.db');

var marketModel= {};

/* We get all the markets showed in our about section map */
exports.getAllMarkets = function (cb){
    mysql.connection.query('SELECT * FROM Mercados',function (err, rows, fields) {
        cb(err, rows);
    });
};