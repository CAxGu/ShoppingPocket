var router = require('express').Router();
var mysql = require('../../config/config.db');
var maincategoriesModel = require('../../models/MainCategory.js');

router.get('/', function(req, res, next){
  maincategoriesModel.getAllMainCategories(function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

module.exports = router;