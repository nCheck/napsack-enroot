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
        item : {
            type : Schema.Types.ObjectId,
            ref : 'Recycle'
        } , 
        count : {
            type : Number,
            default : 0
        }
    }],
    loc: {
        lat:{
            type:Schema.Types.Decimal128

        },
        long:{
            type:Schema.Types.Decimal128
        }
    },
    pickup:[{
        type:Schema.Types.ObjectId,
        ref :'Pickup'
    }]
    
    
});

// colSchema.index({ "loc": "2dsphere" });

module.exports=mongoose.model('Collector' , colSchema)