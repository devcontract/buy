var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var User = require('../models/user');
var flash = require('connect-flash');


router.get('/remove', function(req, res, done) {

    return console.log("looking for something to remove");

});

router.get('/verify', function (req, res, done ) {

    var secretToken = req.query.secretToken;
   // console.log(secretToken);
    User.findOne({'secretToken': secretToken}, function(err, user){
        if(err){
           // console.log('error');
            return done(err);
        }
        if (!user) {

            console.log('token not ok');
            req.flash('error', 'No user found , please register');
            return  res.redirect('/user/signup');

        }
        console.log(user.secretToken);
        if (user.secretToken === secretToken){


        user.active = true;
        user.expireAt = null;
           console.log('token ok');
           user.save(function (err, result) {
               if(err){
                   return done(err);}
               req.flash('success', 'Activated! You may now login');

               return  res.redirect('/user/signin');

            });

        }

    });

});

var csrfProtection = csrf();

router.use(csrfProtection);

router.get('/profile', isLoggedIn , function (req, res, next) {
    var menu = req.flash('active');
    res.render('user/profile',{menu:menu});
});


router.get('/logout', isLoggedIn ,function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next){
   next();
});





router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/signin',
    failureRedirect: '/user/signup',
    failureFlash: true
}));


router.get('/signup', function (req, res, next ) {
    var messages = req.flash('error');
    var menu = 0;
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 , menu:menu > 0} );
});


router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/signin',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    var success = req.flash('success');
    var menu = 0;
    res.render('user/signin', {csrfToken: req.csrfToken(), menu: menu > 0, success: success, isSuccess: success.length > 0 , messages: messages, hasErrors: messages.length > 0 } );

});

router.post('/signin', passport.authenticate('local.signin',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));



module.exports = router;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect('/');
};

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()){
        return next();
    }

    res.redirect('/');
};
