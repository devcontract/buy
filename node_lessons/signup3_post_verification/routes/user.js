var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
var User = require('../models/user');
var flash = require('connect-flash');


router.get('/verify', function (req, res, done ) {

    var secretToken = req.query.secretToken;
   // console.log(secretToken);
    User.findOne({'secretToken': secretToken}, function(err, user){
        if(err){
           // console.log('error');
            return done(err);
        }
        if (!user) {
          //  console.log('token not ok');
            return  res.redirect('/user/signin');
        }
        //console.log(user.secretToken);
        if (user.secretToken == secretToken){
            user.active = true;
            user.expireAt = null;
          //  console.log('token ok');
            user.save(function (err, result) {
                if(err){
                    return done(err);
                }
                return  res.redirect('/user/signin');

            });

        }

    });

});

var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/profile', isLoggedIn , function (req, res, next) {
    res.render('user/profile');
});


router.get('/logout', isLoggedIn ,function (req, res, next) {
    req.logout();
    res.redirect('/');
});

router.use('/', notLoggedIn, function(req, res, next){
   next();
});


router.get('/verify', function (req, res, next ) {
    var messages = req.flash('error');

});


router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/signin',
    failureRedirect: '/user/signup',
    failureFlash: true
}));


router.get('/signup', function (req, res, next ) {
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 } );
});


router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/signin',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/signin', function (req, res, next) {
    var messages = req.flash('error');
    res.render('user/signin', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 } );

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
