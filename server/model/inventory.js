var mongoose = require('mongoose');
var Schema = mongoose.Schema

var inventorySchema = new mongoose.Schema({
    
    items : [{
        item : {
            type : Schema.Types.ObjectId,
            ref : 'Recycle'
        } , 
        count : {
            type : Number,
            default : 0
        }
    }]

})

module.exports=mongoose.model('Inventory',inventorySchema);