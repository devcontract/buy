var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;
var randomstring = require('randomstring');
var mailer = require('../misc/mailer');


passport.serializeUser(function (user, done) {

    done(null,user.id);
});

passport.deserializeUser(function (id, done) {

   User.findById(id, function (err, user) {
       
       done(err, user);
   });
});

 passport.use('local.signup', new LocalStrategy({
     usernameField: 'email',
     passwordField: 'password',
     passReqToCallback: true
 }, function (req, email, password, done) {
     req.checkBody('email', 'Invalid email').notEmpty().isEmail();
     req.checkBody('password', 'Invalid password').notEmpty().isLength({min:4});
     var errors = req.validationErrors();
     if (errors) {
         var messages = [];
         errors.forEach(function (error) {
             messages.push(error.msg);
         });
         return done(null, false);
     }
     User.findOne({'email': email}, function (err, user) {
         if(err){
             return done(err);
         }
         if (user) {
             return done(null, false, {message: 'Email is already in use'});
         }

         var newUser = new User();
         newUser.email = email;
         newUser.password = newUser.encryptPassword(password);
         newUser.secretToken = randomstring.generate(13);
         newUser.active = true ;
         newUser.save(function (err, result) {
             if(err){
                 return done(err);
             }

            var html = '<body style="background-color:orange"><div style="width: 50%; margin: 0 auto;background-color:orange;margin-top:15%"><hr> ' +
                '<p style="text-align: center"> <div style="text-align: center; font-size: 18px ; padding: 5px; margin: 0 0 0 0; width: auto; height: auto; border-radius:3px;">Please verify your email to signin </div> </p>' +
                '<p style="text-align:center;"> <a href="http://127.0.0.1:3000/user/verify/?secretToken='+ newUser.secretToken +'" style="text-decoration:none;color: whitesmoke;font-size: 18px ; padding: 5px; margin: 10% 0 10% 0; width: auto; height: auto;background-color:dodgerblue;border-radius:3px;">Verify Email</a><hr> ' +
                '</body>';

             // send email
             mailer.sendEmail( 'noreply@email.com', newUser.email , 'Activate Your Account!', html);


             return done(null, newUser);

         });


     });
 }));

 passport.use('local.signin', new LocalStrategy({
     usernameField: 'email',
     passwordField: 'password',
     passReqToCallback: true
 }, function (req, email, password, done) {
     req.checkBody('email', 'Invalid email').notEmpty().isEmail();
     req.checkBody('password', 'Invalid password').notEmpty();
     var errors = req.validationErrors();
     if (errors) {
         var messages = [];
         errors.forEach(function (error) {
             messages.push(error.msg);
         });
         return done(null, false);
     }

     User.findOne({'email': email}, function (err, user) {
         if(err){
             return done(err);
         }
         if (!user) {
             return done(null, false);
         }
         if (user.active == false){
             return done(null, false);
         }
         if (!user.validPassword(password)) {
             return done(null, false);
         }
         return done(null, user);
     });
 }));


