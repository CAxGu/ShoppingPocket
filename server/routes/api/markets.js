var router = require('express').Router();
var mysql = require('../../config/config.db');
var marketsModel = require('../../models/Markets.js');

router.get('/', function(req, res, next){
  marketsModel.getAllMarkets(function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

module.exports = router;