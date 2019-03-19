var Product = require('../model/db');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todo',  { useNewUrlParser: true });

var todo =[  new Product({
    title: 'Breakfsat',
    description:'Breakst at 8 am with Jana and Sofia',

})
];
var done = 0;

for (var i = 0; i < todo.length; i++){
    todo[i].save(function (err, result) {
        done++;
        if (done === todo.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

