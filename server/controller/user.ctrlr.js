var mongoose = require('mongoose');
var User = mongoose.model('User');
var Customer=require('../model/customer');
var Collector=require('../model/collector');
var Event= mongoose.model('Event');

//===To display all users =============

module.exports.viewingRegion=(req,res)=>{
		console.log("Hello , im loggin in")
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

findUser = (username)=>{
    return new Promise( (resolve, reject)=>{
        User.findOne({
            username : username
        }, (err , doc)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(doc)
            }
        })
    })
}


module.exports.createEvent=(req,res)=>{
var user=findUser(req.user.username);

var r=req.body;
var r1=r.rule1,
	r2=r.rule2,
	r3=r.rule3
var Rules={r1,r2,r3};
Event.create({eventName:r.eventName,description:r.description,rules:Rules,eventType:r.eventType,eventMode:r.eventMode,startDate:r.startDate,endDate:r.endDate,organised_by:user.customerId},(err,doc)=>{
	if(err)
	console.log(err);
	else{
		console.log("Event created "+doc);

		}
		res.json({status:"Success man"});
	}
)

}
	module.exports.ongoingEvent=(req,res)=>{
		var events=[];
		Event.find({},(err,doc)=>{
			if(doc.startDate<=Date.now() && doc.endDate>=Date.now())
			{
				events.push(doc);
			}

		})
	}
module.exports.sendBal=(req,res)=>{
	User.findByOne({username:req.user.username},(err,doc)=>{
		if(doc.role==='Collector')
			res.json({balance:doc.wallet,status:'ok'})
		else
			res.json({balance:doc.wallet,status:'ok'})
	})
}

module.exports.spend=(req,res)=>{
	User.findOne({username:req.user.username},(err,doc)=>{
		doc.wallet-=req.balance;
		res.json({amountLeft:doc.wallet,status:'ok'})
	})
}