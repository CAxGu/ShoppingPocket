var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;


var userSchema = {}


exports.validPassword = function(user,password) {
  let saltUser='';
  if(user!=undefined){
    saltUser= user.salt;

    var hash = crypto.pbkdf2Sync(password, saltUser, 10000, 512, 'sha512').toString('hex');
    return user.hash === hash;
  }
};


exports.activationToken = function() {
  return Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
};


exports.setPassword = function(user,password){
    user.salt = crypto.randomBytes(16).toString('hex');
    user.hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
  };
  

exports.generateJWT = function(user) {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
  
    return jwt.sign({
      id: user.id_user,
      username: user.username,
      exp: parseInt(exp.getTime() / 1000),
    }, secret);
};


exports.toAuthJSON = function(user){

    return {
      username: user.username,
      email: user.email,
      token: this.generateJWT(user),
      profile_pic: user.profile_pic
    };
  };


exports.toProfileJSONFor = function(user){
    return {
      username: user.username,
      profile_pic: user.profile_pic || 'http://codigo-abierto.cc/wp-content/uploads/2013/01/copyleftimagen1.jpg',
    };
};