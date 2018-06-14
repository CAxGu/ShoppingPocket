var router = require('express').Router();
var mysql = require('../../config/config.db');
var brandsModel = require('../../models/Brand.js');

router.get('/', function(req, res, next){
  brandsModel.getAllBrands(function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

module.exports = router;