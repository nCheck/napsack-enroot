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
    }] ,
    quests : [ { quest : {
        type : Schema.Types.ObjectId,
        ref : 'Transaction'
    } ,
        progress : {
            type : Number,
            default : 0
        }
    }],
    institution:String 

})









module.exports = mongoose.model('Customer' , customerSchema)