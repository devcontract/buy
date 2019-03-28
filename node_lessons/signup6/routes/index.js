var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    var menu = req.flash('menu');
    var status = req.flash('active');
    res.render('index', { title: 'Example', menu: menu, status: status });
});


module.exports = router;
