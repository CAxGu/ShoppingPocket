var router = require('express').Router();
var mysql = require('../../config/config.db');
var discountModel = require('../../models/Discount.js');
var userModel = require('../../models/User.js');

router.post('/', function(req, res, next){

    let mail=req.body.data.usermail;
    let code=req.body.data.discountCode;
    let id_currentuser;
    let discountData;

    userModel.getOneUser(mail,function(err, results) {
        if (err)
          throw err;
        else
            id_currentuser=results[0].id_user;
            discountModel.getUserDiscounts(id_currentuser,code.toUpperCase(),function(err, results) {
                if (err)
                  throw err;
                else
                    if(results.length==0){
                        res.send(JSON.stringify({resolution:"none",result:null})); 
                    }else{
                        discountData=results[0];
                        if(discountData.used_discount==1){
                            res.send(JSON.stringify({resolution:"used",result:null})); 
                        }else{
                            discountModel.useDiscount(id_currentuser,code.toUpperCase(),function(err,results) {
                                if (err)throw err;
                            });
                            res.send(JSON.stringify({resolution:"ok",result:discountData})); 
                        }
                    }
            });
    });
});


module.exports = router;