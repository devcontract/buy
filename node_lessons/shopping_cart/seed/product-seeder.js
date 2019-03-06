var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',  { useNewUrlParser: true });

var products =[  new Product({
    imagePath: 'https://www.mariowiki.com/images/thumb/5/57/Powerup-mini-mushroom-sm.png/200px-Powerup-mini-mushroom-sm.png',
    title:'Super Mushroom',
    description:'Super mushroom!!!!!',
    price: 25
})
];
var done = 0;

for (var i = 0; i < products.length; i++){
    products[i].save(function (err, result) {
        done++;
        if (done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

