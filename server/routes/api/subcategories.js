var router = require('express').Router();
var mysql = require('../../config/config.db');
var subcategoriesModel = require('../../models/Subcategory.js');

router.get('/:subcatname', function(req, res, next){
    subcategoriesModel.getAllSubcategories(req.params.subcatname,function(err, results) {
        if (err)
          throw err;
        else
          res.send(results); 
    });
});

module.exports = router;