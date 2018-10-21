var mongoose = require('mongoose');
var Schema = mongoose.Schema

var tempSchema = new mongoose.Schema({
    
    items : [{
        item : {
            type : String,
        } , 
        count : {
            type : Number,
            default : 0
        }
    }]

})

module.exports=mongoose.model('TempQuest',tempSchema);