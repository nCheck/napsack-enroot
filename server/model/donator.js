var mongoose = require('mongoose');
var Schema = mongoose.Schema


var donSchema = mongoose.Schema({
    name : String,
    phoneNo : Number,
    wallet : {
        type : Schema.Types.ObjectId,
        ref : 'Donator'        
    } ,
    transactions : [{
        type : Schema.Types.ObjectId,
        ref : 'Transaction'
    }] 

})









module.exports=mongoose.model('Donator' , donSchema)