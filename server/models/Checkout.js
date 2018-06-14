var mysql = require('../config/config.db');

var checkoutModel= {};

exports.storePurchase = function (data,cb){

    let purchase = [];
    let cart = data.cart;
    let actualdate = new Date();

    if (data.currentusermail!=undefined){

        /* Look for the user_id into our database in base of the email given by the current loged user */
        mysql.connection.query("select id_user from Users where email like'"+data.currentusermail+"'"
        ,function (err, rows, fields) {
            if(err){
                throw err;
            }else{
                let actualuser = rows[0].id_user;
                generatePurchase(actualuser,cart,actualdate);
            }
        });
    }else{
        generatePurchase(null,cart,actualdate);
    }

    /* We "encapsulate" all the information related to this purchase to be stored in just one sql query */
    function generatePurchase (actualuser,cart,actualdate){
        cart.forEach(product => {
            purchase.push([actualuser,product.id_prod,product.uds,actualdate]);
        });
        insertPurchase(purchase);
    }

    function insertPurchase(purchase){
        let sql = "INSERT INTO Purchases (id_client,id_prod,uds_prod,date_purchase) VALUES ?";
        mysql.connection.query(sql,[purchase],function (err, rows, fields) {
            cb(err, rows);
        });
    }
};