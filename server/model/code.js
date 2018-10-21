var mongoose = require('mongoose');
var Schema = mongoose.Schema
var shortid = require('shortid');

var codeSchema = mongoose.Schema({
    code : {
        type : String,
        unique : true,
        default : shortid.generate
    } ,
    transId : String ,
    isAlive : {
        type : Boolean,
        default : true
    }
})


module.exports = mongoose.model('Code', codeSchema)