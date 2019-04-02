// get packages we need

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');  // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var User = require('./models/user'); // get our mongoose model



// configuration


var port = process.env.PORT || 8080; // listnening on port
mongoose.connect('mongodb://localhost:27017/oneTwo', { useNewUrlParser: true }); // connect to the database
app.set('superSecret', config.secret); //secret variable

// use body parser so we can get info from POST and/or URL parameters

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(morgan('dev'));

//routes


app.get('/', (req, res)=>{
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// API ROUTES
// get an instance of the router for api routes

var routes = express.Router();

// route to authenticate a user (POST http://localhost:8080/api/authenticate)

// route middleware to verify a token




routes.post('/authenticate', (req,res)=>{
    // find user

    User.findOne({
        name: req.body.name
    }, (err, user)=>{
        if (err) throw err;

        if (!user){
            res.json({success:false,message:'User not found'});

        } else if (user){
            // check if password matching
            if (user.password != req.body.password){
                res.json({
                    success: false,
                    message: 'Authentication failed. Wrong password.'
                });
            } else {
                // if user is found and password is right
                // create a token with only our given payload
                // we don't want to pass in the entire user since that has the password
                const payload = {
                    admin: user.admin
                };
                var token = jwt.sign(payload, app.get('superSecret'),{expiresIn: 1440}); // expires in 24 hours});
                // return the informaotin including token as json
                res.json({
                    succes: true,
                    message: 'Enjoy your Token',
                    token: token
                });
            }
        }

    })
})

// TODO: route middleware to verify a token

// route to show a random message (GET http://localhost:8080/api/)

routes.get('/', (req, res)=>{
    res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)

routes.get('/users', (req, res)=>{
   User.find({}, (err, users)=>{
       res.json(users);
   }) ;
});


// apply the routes to our application with the prefix /api

app.use('/api', routes);



app.get('/setup', (req, res)=>{
    // create a simple user
    var user = new User({
        name : 'Kostas Kuzmenko',
        password: 'password',
        admin: true
    });

    //save simple user

    user.save((err)=>{
        if (err) throw err;

        console.log('User Saved successfully ');
        res.json({ success: true});
    });
});

// start the server


app.listen(port);
console.log('Magic happens at http://localhost:' + port);