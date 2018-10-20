var mongoose=require('mongoose')
var Schema=mongoose.Schema;

var pickupSchema=new Schema({
    pickupDate:Date,
    transaction:[{
        type:Schema.Types.ObjectId,
        ref:'Transaction'
    }],
    pickupBy:String
})


module.exports=mongoose.model('Pickup',pickupSchema);