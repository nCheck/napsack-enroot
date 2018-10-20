var mongoose = require('mongoose');
var Schema = mongoose.Schema

var colSchema = mongoose.Schema({
    shopName : String,
    addressLine1 : String,
    addressLine2 : String,
    acceptedItems : [{
        type : Schema.Types.ObjectId,
        ref : 'Recycle'
    }] ,
    transactions : [{
        type : Schema.Types.ObjectId,
        ref : 'Transaction'
    }] ,
    wallet : {
        type : Schema.Types.ObjectId,
        ref : 'Wallet'        
    } , 
    inventory:[{
        type:Schema.Types.ObjectId,
        ref:'Inventory'
    }],
    loc: {
        lat:{
            type:Schema.Types.Decimal128

        },
        lon:{
            type:Schema.Types.Decimal128
        }
    },
    
    
});

// colSchema.index({ "loc": "2dsphere" });

module.exports=mongoose.model('Collector' , colSchema)