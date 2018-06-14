var mysql = require('../config/config.db');

var brandsModel= {};

/* We get all the brands in our database */
exports.getAllBrands = function (cb){

    mysql.connection.query('SELECT * FROM Marcas',function (err, rows, fields) {
        cb(err, rows);
    });
};