var mongoose = require('mongoose');
var passportlocalmongoose=require('passport-local-mongoose')
var Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
	username : String,
	password : String ,
	role :{
		type : String,
        enum:['Collector','Customer'],
		default : 'Customer'
	},
});



userSchema.plugin(passportlocalmongoose);//Add all functionalities of local mongoose available to model created by this schema

module.exports=mongoose.model('User',userSchema);