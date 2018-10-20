var mongoose = require('mongoose')
var Schema = mongoose.Schema


var walletSchema = mongoose.Schema({
    points : {
        type : Schema.Types.Decimal128 , 
        default : 0.0
    }
})












module.exports=mongoose.model('Wallet' , walletSchema)