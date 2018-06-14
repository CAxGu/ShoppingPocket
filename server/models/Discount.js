var mysql = require('../config/config.db');

var discountModel= {};

/* Looks for the discount of the current User */
exports.getUserDiscounts = function (iduser,code,cb){
    mysql.connection.query("select * from Discounts where id_user_discount in (select id_user_discount from Discounts"+
    " inner join Users on id_user_discount=id_user where codeDiscount like '"+code+"' and id_user like "+iduser+")"
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};

/* Set to used the current discount code */
exports.useDiscount = function (iduser,code,cb){
    mysql.connection.query("Update Discounts set used_discount=1 where codeDiscount like '"+code+"' and id_user_discount like "+iduser+""
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};