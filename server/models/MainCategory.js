var mysql = require('../config/config.db');

var maincategoriesModel= {};

/* We get all the main categories that will be shown on the homepage */
exports.getAllMainCategories = function (cb){

    mysql.connection.query('SELECT * FROM MainCategorias',function (err, rows, fields) {
        cb(err, rows);
    });
};