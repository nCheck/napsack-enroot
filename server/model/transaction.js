var mongoose = require('mongoose');
var Schema = mongoose.Schema
var Dump = mongoose.model('TempQuest')

var tranSchema = mongoose.Schema({

    isPending : {
        type : Boolean,
        default : true
    } ,

    transacDate : {
        type : Date,
        default : Date.now()
    },

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
    } ,

    tempId :{
        type : Schema.Types.ObjectId,
        ref : 'tempQuest'
    }
})











module.exports=mongoose.model('Transaction' , tranSchema)