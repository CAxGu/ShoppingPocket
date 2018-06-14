var router = require('express').Router();
var mysql = require('../../config/config.db');
var productModel = require('../../models/Product.js');

router.get('/:data', function(req, res, next){
  var data = JSON.parse(req.params.data);
    productModel.getAllProducts(data.maincat_name,data.cat_name,data.subcat_name,function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

router.get('/product/:idprod', function(req, res, next){
    productModel.getProduct(req.params.idprod,function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});


module.exports = router;