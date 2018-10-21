var mongoose = require('mongoose');
var Schema = mongoose.Schema
var uniqid = require('uniqid');

var codeSchema = mongoose.Schema({
    code : {
        type : String,
        unique : true,
        default : uniqid.time()
    } ,
    transId : String ,
    isAlive : {
        type : Boolean,
        default : true
    }
})


module.exports = mongoose.model('Code', codeSchema)