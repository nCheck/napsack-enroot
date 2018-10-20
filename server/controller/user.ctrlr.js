var mongoose = require('mongoose');
var User = mongoose.model('User');
var Customer=require('../model/customer');
var Collector=require('../model/collector');

//===To display all users =============
module.exports.viewingRegion=(req,res)=>{

		if(req.user.role==='Customer')
			res.redirect('/');	
		else{
			res.redirect('/');
		}
	}



	customerCreation=(req,res)=>{
		return new Promise((resolve,reject)=>{

	if(req.User.role==='Customer')
		{
			Customer.create({name:username,phoneNo:req.body.phoneNo},(err,doc)=>{
				if(err)
				reject(err);
				else{

			User.findOneAndUpdate({username:username},{$set:{userId:doc._id}},(err,docc)=>{
				if(err)
				console.log(err);
				console.log(docc);
			})	
				resolve(doc);
			}
		
			})
		}
		else
		{
			Collector.create({shopName:req.body})
///COMPLETE HEERE
		}
	
	
	})
	}
