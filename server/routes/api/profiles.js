var router = require('express').Router();
var mysql = require('../../config/config.db');
var userModel = require('../../models/User.js');
var userS = require('../../utils/user');
var auth = require('../auth');

// Preload user profile on routes with ':username'
/* router.param('username', function(req, res, next, username){
  userModel.getByUsername(username, function(err, user) {
    if (err){
      throw err;
    }else{
      if (!user) { return res.sendStatus(404); }
      req.profile = user[0];

      return next();
    }         
  }).catch(next);

});

router.get('/:username', auth.optional, function(req, res, next){
  if(req.payload){
    userModel.getById(req.payload.id, function(err, user) {
      if (err){
        console.log("hola 1");
        throw err;
      }else{
        console.log("hola 1.5");
        if(!user){ return res.json({profile: userS.toProfileJSONFor(false)}); }

        console.log("hola 2");
        console.log(userS.toProfileJSONFor(user[0]));
        return res.json({profile: userS.toProfileJSONFor(user[0])});
      }         
    });
  } else {console.log("hola 3");
    return res.json({profile: userS.toProfileJSONFor(false)});
  }
}); */

router.get('/:username', auth.optional, function(req, res, next){
  if(req.payload){
    userModel.getByUsername(req.params.username, function(err, user) {
      if (err){
        throw err;
      }else{
        if(!user){ return res.json({profile: userS.toProfileJSONFor(false)}); }

        return res.json({profile: userS.toProfileJSONFor(user[0])});
      }         
    });
  } else {
    return res.json({profile: userS.toProfileJSONFor(false)});
  }
});

module.exports = router;