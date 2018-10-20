var mongoose = require('mongoose');
var Schema = mongoose.Schema


var customerSchema = new Schema({
    wallet : {
        type : Number,
        default : 0.0        
    } ,
    transactions : [{
        type : Schema.Types.ObjectId,
        ref : 'Transaction'
    }] 

})









module.exports = mongoose.model('Customer' , customerSchema)