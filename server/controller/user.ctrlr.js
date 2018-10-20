var mongoose = require('mongoose');
var User = mongoose.model('User');
var Customer=require('../model/customer');
var Collector=require('../model/collector');

//===To display all users =============

module.exports.viewingRegion=(req,res)=>{

		if(req.user.role==='Customer'){
			res.json({role:'Customer' , status : true});
		}	
		else{
			res.json({role:'Collector' , status : true});
		}
	}



module.exports.profileCreation = (req,res)=>{
var username = req.user.username
if(req.user.role==='Customer')
	{
		Customer.create({},(err,doc)=>{
			if(err)
				console.log(err);
			else{

		User.findOneAndUpdate({username:username},{$set:{customerId:doc._id}},(err,docc)=>{
			if(err)
			res.send(err);
			else
			res.send(docc+" updated id ");
		})	

		}
	
		})
	}
	else
	{
		var r=req.body;
		var items=[];
	
		if(r["Glass Bottle"]==='true')
			items.push('5bcb03c64f37e84f9ac5012a');
		if(r["TetraPacks"]==='true')
			items.push('5bcb03c64f37e84f9ac5012c')  ;
		if(r["Plastic Bottle"]==='true')
			items.push('5bcb03c64f37e84f9ac5012b') ;
		if( r["Card board Box"]==='true')
			items.push('5bcb03c64f37e84f9ac5012d');
		if( r["Wrappers"]==='true')
			items.push('5bcb03c64f37e84f9ac5012e') ; 
			
		Collector.create({shopName:r.shopName,adressLine1:r.adressLine1,adressLine2:r.adressLine2,acceptedItems:items},(err,doc)=>{
			if(err)
			{
				console.log(err);
			}
			else
			{
				User.findOneAndUpdate({username:'suyash'},{$set:{collectorId:doc._id}},(err,docc)=>{
					if(err)
					console.log(err)
					else{
					console.log(doc)
					console.log(docc+" is user ")
					res.send(doc+" "+docc);
				
				}
				})
			}
		})

	}


}
	
