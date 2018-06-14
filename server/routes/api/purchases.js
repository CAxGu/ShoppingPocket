var router = require('express').Router();
var mysql = require('../../config/config.db');
var userModel = require('../../models/User.js');
var purchasesModel = require('../../models/Purchases.js');


router.post('/:email', function(req, res, next){

    userModel.getOneUser(req.params.email,function(err, result) {
        if (err)
          throw err;
        else{
            purchasesModel.getAllUserPurchases(result[0],function(err, results) {
                if (err)
                throw err;
                else
                res.send(results); 
            });
        }
    });
  });


router.post('/purchase/:purchase', function(req, res, next){

    let purchase = JSON.parse(req.params.purchase);    
    purchasesModel.getContentPurchase(purchase,function(err, results) {
        if (err)
            throw err;
        else
            res.send(results); 
        });
  });

module.exports = router;