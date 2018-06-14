var mysql = require('../../config/config.db');
var userModel = require('../../models/User.js');
var router = require('express').Router();
var passport = require('passport');
var auth = require('../auth');
var userS = require('../../utils/user');
var emailUtils = require('../../utils/email');


router.get('/user', auth.required, function(req, res, next){

    userModel.getById(req.payload.id, function(err, user) {
        if (err){
          throw err;
        }else{
          if(!user){ return res.sendStatus(401); }
          return res.json({user: userS.toAuthJSON(user[0])});
        }         
      })

});


router.post('/users/login', function(req, res, next){
    if(!req.body.user.email){
      return res.status(422).json({errors: {email: "El Email no puede estar vacío"}});
    }
  
    if(!req.body.user.password){
      return res.status(422).json({errors: {password: "La Contraseña no puede estar vacío"}});
    }
  
    passport.authenticate('local', {session: false}, function(err, userObj, info){
      if(err){ return next(err); }

      if(userObj){
        if(userObj.active==1){
          userObj.token = userS.generateJWT(userObj);
          return res.json({user: userS.toAuthJSON(userObj)});
        }else{
          return res.status(422).json({errors: {activate: "Verifica tu bandeja de correo para activar tu cuenta."}});
        }
      } else {
          return res.status(422).json(info);
      }
    })(req, res, next);
});



router.post('/users', function(req, res){
  var userObj = {};

  userObj.username=req.body.user.username;
  userObj.email = req.body.user.email;
  userS.setPassword(userObj,req.body.user.password);
  userObj.token = userS.activationToken();
  userObj.origin = req.body.user.originurl;

  userModel.createUser(userObj, function(err, result) {
      if (err){
        return res.status(422).json({errors: {email: err}});
      } else{
        emailUtils.sendMailActivation(userObj,function(err,result){
          if(err){
            return res.status(422).json({errors: {token: "Ha habido algún problema al generar su cuenta. Intentelo más tarde"}});
          }else{
            return res.json({user: userS.toAuthJSON(userObj)});
          }
        });    
      }
  })
});


router.post('/users/social', function(req, res, next){
    var userObj = {};

    userObj.name=req.body.user.name;
    userObj.username=req.body.user.username;
    userObj.email=req.body.user.email;
    userS.setPassword(userObj,req.body.user.password);
    userObj.profile_pic=req.body.user.image;
    userObj.id_social=req.body.user.id;


    userModel.verifyExist(userObj, function(err, result) {
      if (err){
        return res.status(422).json({errors: {email: "Cuenta utilizada no válida. Verifique sus credenciales"}});
      }else{

        if(result.length==0){
            userModel.createSocialUser(userObj, function(err, result) {
                if (err){return res.status(422).json({errors: {email: err}});
                }else{
                  passport.authenticate('local', {session: false}, function(err, userObjs, info){

                    if(err){ return next(err); }
                    if(userObjs){

                      userObjs.token = userS.generateJWT(userObjs);
                      return res.json({user: userS.toAuthJSON(userObjs)});
                    } else {return res.status(422).json(info); }

                  })(req, res, next); 
                }
            })
        }else if (result.length!=0){
            passport.authenticate('local', {session: false}, function(err, userObjs, info){

            if(err){ return next(err); }
            if(userObjs){

              userObjs.token = userS.generateJWT(userObjs);
              return res.json({user: userS.toAuthJSON(userObjs)});
            } else {

              return res.status(422).json(info);
            }
          })(req, res, next); 
        }
      }
    });

  });


  router.post('/users/activation', function(req, res, next){
    let currentUser;

    userModel.activateUser(req.body.data.token, function(err, result) {

      if(err){
        return res.status(422).json({errors: {token: "Ha habido algún problema al activar su cuenta. Intentelo más tarde"}});
      }else{
 /*        currentUser=result[0];
        passport.authenticate('local', {session: false}, function(err, currentuser, info){
          if(err){ return next(err); }
         
            if(currentUser){
              currentUser.token = userS.generateJWT(currentUser);
              return res.json({user: userS.toAuthJSON(currentUser)});
            } else {
              return res.status(422).json(info);
            }
          })(req, res, next);  */
          return res.send({success:'Cuenta activada con éxito'});
      }

    });

  });


  router.post('/users/sendRecover', function(req, res, next){
    var userrecover = {};

    userrecover.email = req.body.data.email;
    userrecover.token_recover = userS.activationToken();
    userrecover.origin = req.body.data.originurl;


    userModel.createTokenPwd(userrecover, function(err, result) {
      if (err){
        return res.status(422).json({errors: {email: "El email facilitado no existe"}});
      } else{
        emailUtils.sendMailRecover(userrecover,function(err,result){
          if(err){
            return res.status(422).json({errors: {token: "Ha habido algún problema al regenerar su contraseña. Intentelo más tarde"}});
          }else{
            return res.send({success:'Token enviado correctamente'});
          }
        });   
      }
    })

    /* userrecover.email = req.body.data.email;
    userrecover.token_recover = userS.activationToken();
    userrecover.origin = req.body.data.originurl;

    emailUtils.sendMailRecover(userrecover,function(err,result){
        if(err){
          return res.status(422).json({errors: {token: "Ha habido algún problema al regenerar su contraseña. Intentelo más tarde"}});
        }else{
          return res.send(200);
        }
      });   */  
  });

  

  router.post('/users/newpassword', function(req, res, next){

    var userChange = {};
    let usertochange;

    userChange.email = req.body.data.email;
    userChange.token_recover = req.body.data.token;
    userS.setPassword(userChange,req.body.data.password);
    console.log("hola ha llegado todo correctamente");+
    console.log(req.body.data);
    console.log(userChange);

    userModel.changePassword(userChange, function(err, result) {
      if (err){
        console.log("hola");
        console.log(err);
        return res.status(422).json({errors: {token: "Ha habido algún error con el token o email facilitados, Vuelva a solicitar un cambio e contraseña y pruebe otra vez."}});
      } else{
        return res.send({success:'Token enviado correctamente'});
    /*     usertochange=result[0];
        console.log(usertochange);
        passport.authenticate('local', {session: false}, function(err, result, info){
          if(err){ return next(err); }
    
          if(result){
            result.token = userS.generateJWT(result);
              return res.json({user: userS.toAuthJSON(result)});
          } else {
              console.log("hola2");
              console.log(info);
              return res.status(422).json(info);
          }
        })(req, res, next); */
      }
  })

  });

  
  module.exports = router;