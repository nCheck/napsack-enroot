var mongoose = require('mongoose');
var Schema = mongoose.Schema


var recycleSchema =  mongoose.Schema({
    item : String , 
    value : Number
})








module.exports = mongoose.model('Recycle' , recycleSchema)