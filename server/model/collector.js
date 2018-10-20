var mongoose = require('mongoose');

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
    loc: {
        type: { type: String },
        coordinates: []
    } 
    
});

colSchema.index({ "loc": "2dsphere" });

module.exports=mongoose.model('Collector' , colSchema)