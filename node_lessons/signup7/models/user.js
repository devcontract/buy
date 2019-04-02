var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
require('dotenv');

mongoose.set('useCreateIndex', true);

var userSchema = new Schema({

    expireAt : { type: Date, required: false, default: ()=>{
            var expiry = new Date();
            expiry = new Date(expiry.setMinutes(expiry.getMinutes() + process.env.RECORD_EXPIRY_TIME));
            return expiry;
        } },
    createdAt: { type: Date, required: true, default: Date.now },
    email: {type: String, required: true},
    password: {type: String, required: true},
    secretToken: {type: String, required: true},
    active: {type: Boolean, required: true}


});

userSchema.index( { "expireAt": 1 }, { expireAfterSeconds: 0 } );

userSchema.methods.encryptPassword = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};


userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model('User', userSchema);