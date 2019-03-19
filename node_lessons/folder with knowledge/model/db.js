var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var schema = new Schema({

    title : {type: String, required: true},
    description : {type: String, require: true},
    status : {type: String, require: true, default : 'notdone'},
    createdAt: {type: Date, require: true, default:  Date.now()}
});

module.exports = mongoose.model('todo', schema);