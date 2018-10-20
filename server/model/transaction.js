var mongoose = require('mongoose');
var Schema = mongoose.Schema


var tranSchema = mongoose.Schema({

    isPending : {
        type : Boolean,
        default : true
    } ,

    transacDate : Date,

    items : [{
        item : {
            type : Schema.Types.ObjectId,
            ref : 'Recycle'
        } , 
        count : {
            type : Number,
            default : 0
        }
    }],

    collectorId : String , 
    customerId : String,
    
    transacValue : {
        type : Number,
        default : 0.0
    }
})












module.exports=mongoose.model('Transaction' , tranSchema)