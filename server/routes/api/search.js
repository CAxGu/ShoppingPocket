var router = require('express').Router();
var mysql = require('../../config/config.db');
var searchModel = require('../../models/Search.js');

router.post('/', function(req, res, next){

    searchModel.searchProds(req.body.search.search,function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

module.exports = router;