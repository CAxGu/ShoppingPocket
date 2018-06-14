var router = require('express').Router();
var mysql = require('../../config/config.db');
var categoriesModel = require('../../models/Category.js');

router.get('/:catname', function(req, res, next){

    categoriesModel.getAllCategories(req.params.catname,function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

module.exports = router;