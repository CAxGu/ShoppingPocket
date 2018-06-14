var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mysql = require('./config.db');
var userModel = require('../models/User.js');
var userS = require('../utils/user');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]'
}, function(email, password, done) {
    userModel.getOneUser(email, function(err, user) {
        if (err)
          /* throw err; */
            return done(null, false, {errors: {'email or password': 'El Email o Contraseña son incorrectos'}});
        else
          if(!user || !userS.validPassword(user[0],password)){
            return done(null, false, {errors: {'email or password': 'El Email o Contraseña son incorrectos'}});
          }
          return done(null, user[0]);
    })
}));

passport.serializeUser(function(user, done) {
  done(null, user[0]);
});

passport.deserializeUser(function (user, done) {
      User.findOne({email: user[0].email}).then(function(user,err){
        return done(err,user[0]);
      });
});