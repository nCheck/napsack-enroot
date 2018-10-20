var mongoose = require('mongoose');
var passportlocalmongoose=require('passport-local-mongoose')
var Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
    name : String,
    phoneNo : Number,
	username : String,
	password : String ,
	role :{
		type : String,
        enum:['Collector','Customer'],
		default : 'Customer'
	},
	customerId:{
		type:Schema.Types.ObjectId,
		ref:'Customer'
	},
	collectorId:{
		type:Schema.Types.ObjectId,
		ref:'Collector'
	}
});



userSchema.plugin(passportlocalmongoose);//Add all functionalities of local mongoose available to model created by this schema

module.exports=mongoose.model('User',userSchema);