var mongoose = require('mongoose');
var Schema = mongoose.Schema


var recycleSchema =  mongoose.Schema({
    item : String , 
    value : Schema.Types.Decimal128
})








module.exports=mongoose.model('Recycle' , recycleSchema)