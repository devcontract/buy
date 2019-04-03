var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;



// Configure the local strategy for use by Passport.

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
}, function (email, password, done) {

        User.findOne({'email': email}, function (err, user) {
            if (err){
                return done(err);
            }
            if (user){
                return done(null, false, {message:'Email is in use'});
            }

            var newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            newUser.save(function (err, result) {
                if(err){
                    return done(err, false);
                }
                return done(null, newUser);
            });

        });

    }));

passport.use('local.signin', new LocalStrategy({
    usernameField:'email',
    passworField: 'password',
    session: false
},function (email, password, done) {
    User.findOne({email:email}, function (err, user) {
      if (err){
          return done(err, false);
      }
        if(!user){
          return done(err, false , {message:'User not found'});
        }
        if(!user.validPassword(password)){
          return done(null, false, {message:'Wrong Password'});
        }
        return done(null, user);
    });

    }));