var express = require('express');
var router = express.Router();


var Todos = require('../model/db');


// get all todos
router.get('/', (req, res) => {
    Todos.find(function (err, todos) {
        res.render('todoList', {todo: todos});
    });

});

router.post('/', (req, res, done)=>{




    if(!req.body.status){
        var title = req.body.title;
        var description = req.body.description;
        var newTask = new Todos();
        newTask.title = title;
        newTask.description = description;

        newTask.save(function (err, result) {
            if (err) {
                return done(err);
            }
            return  res.redirect('/todoList');
        })
    };



    if(req.body.status === 'notdone'){
        var title = req.body.title;
        var status = req.body.status;
        console.log(title);
        Todos.findOne({'title': title}, function(err, user){
            if(err){
                // console.log('error');
                return done(err);
            }
            if (!user) {

                return      console.log('todo item not found');
            }
            //console.log(user.secretToken);
            if (user.title === title){
                user.status = status;

                //  console.log('token ok');
                user.save(function (err, result) {
                    if(err){
                        return done(err);
                    }
                    return  console.log('todo item not done');

                });

            }

        });

    };

    if(req.body.status === 'done'){
        var title = req.body.title;
        var status = req.body.status;

        Todos.findOne({'title': title}, function(err, user){
            if(err){
                // console.log('error');
                return done(err);
            }
            if (!user) {

                return      console.log('todo item not found');
            }
            //console.log(user.secretToken);
            if (user.title === title){
                user.status = status;

                //  console.log('token ok');
                user.save(function (err, result) {
                    if(err){
                        return done(err);
                    }
                    return  console.log('todo item is done');

                });

            }

        });

    };

    if(req.body.status === 'remove'){
        var title = req.body.title;
        var status = req.body.status;

        Todos.findOne({'title': title}, function(err, user){
            if(err){
                // console.log('error');
                return done(err);
            }
            if (!user){

                return  console.log('todo item not found');
            }
            //console.log(user.secretToken);
            if (user.title === title){
                user.status = status;

                //  console.log('token ok');
                user.remove(function (err, result) {
                    if(err){
                        return done(err);
                    }
                    return  console.log('todo item is done');

                });

            }

        });

    };

});


module.exports = router;
