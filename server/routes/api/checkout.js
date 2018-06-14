var router = require('express').Router();
var emailUtils = require('../../utils/email');
var mysql = require('../../config/config.db');
var checkoutModel = require('../../models/Checkout.js');

router.post('/', function(req, res){

    let currentusermail = req.body.data.currentusermail;
    let email = req.body.data.infoUser.clientMail;
    let ammount = Math.round(req.body.data.totalCart*100);
    let totalnodiscount = req.body.data.totalNoDiscount;
    let discount=false;
  
    var stripe = require("stripe")(process.env.STRIPE_KEY);

    charge();

    function charge() {
   
        let charge = {
            amount: ammount,
            currency: 'eur',
            source: 'tok_visa',
            receipt_email: JSON.stringify(email),
        }

        stripe.charges.create(charge, function(err, charge) {

          if(err) {
            return res.send(err);
          } else {
            checkoutModel.storePurchase(req.body.data,function(err, results) {
              if (err){
                throw err;
              }
            });

            if(totalnodiscount>=30 && currentusermail!=undefined || currentusermail!=null){
              discount=true;
            }
            sendRecipe(discount)/*{
             /*  if(err){
                throw err;
              }else{ */
                return res.send({success:'Pago Realizado'});
             /*  } 
            });*/
          }
        });
    }
    
    function sendRecipe(discount){
      if(discount){
        let discountcode=Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
        
        /* Storing the new discount code generated for the current user */
        generateDiscount(discountcode.toUpperCase(),currentusermail);
        emailUtils.sendMailCheckout(discountcode.toUpperCase(),req,res);       
      }else {
        emailUtils.sendMailCheckout(null,req,res);       
      }
    }

    function generateDiscount(discountcode,currentusermail){
      mysql.connection.query("INSERT INTO Discounts (codeDiscount,ammount,end_date,id_user_discount) "+
      "VALUES ('"+discountcode+"',10,null,(select id_user from Users where email like '"+currentusermail+"'))"
      ,function (err, rows, fields) {
          if(err) {throw err; }
      });
  }
});

module.exports = router;