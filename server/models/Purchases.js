var mysql = require('../config/config.db');

var purchasesModel= {};

/* Getting all purchases from a given user */
exports.getAllUserPurchases = function (user,cb){

    mysql.connection.query("SELECT distinct id_client, date_purchase FROM ShoppingPocket.Purchases where id_client like'"+user.id_user+"' order by date_purchase desc"
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};


/* Getting all items purchased in the current selected purchase */
exports.getContentPurchase = function (purchase,cb){

    let sql= "select Products.id_prod,EAN,prod_name,color,size,prize,prod_pic,sum(uds_prod) as uds_prod "+
    "from Purchases inner join Products where Purchases.id_prod=Products.id_prod and Purchases.id_client "+ 
    "like "+purchase.id_client+ " and date_purchase like '"+purchase.date_purchase+"' group by (id_prod)";

    mysql.connection.query(sql,function (err, rows, fields) {
        cb(err, rows);
    });

};