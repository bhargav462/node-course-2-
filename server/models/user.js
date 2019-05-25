var mongoose = require('mongoose');

var user = mongoose.model('user',{
    email:{
        type:String,
        required:true,
        minlength:10,
        trim:true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = {user};

