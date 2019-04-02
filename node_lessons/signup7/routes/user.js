var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');





router.use('/', notLoggedIn, function(req, res, next){
   next();
});


router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/signin',
    failureRedirect: '/user/signup',
    failureFlash: true
}));


router.get('/signup', function (req, res, next ) {

    res.render('user/signup');
});


router.get('/signin', function (req, res, next) {
    res.render('user/signin');

});

router.post('/signin', passport.authenticate('local.signin',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/signin',
    failureFlash: true
}));

router.get('/profile', isLoggedIn , function (req, res, next) {

    res.render('user/profile',{menu:menu});
});

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
