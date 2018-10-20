var mongoose = require('mongoose');
var Schema = mongoose.Schema


var customerSchema = new Schema({
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









module.exports=mongoose.model('Customer' , customerSchema)