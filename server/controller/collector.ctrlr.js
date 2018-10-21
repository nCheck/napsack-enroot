var Collector=require('../model/collector');
var Customer=require('../model/customer');
var User=require('../model/user');
var Pickup=require('../model/pickup');


findCollector=(username)=>{
    return new Promise((resolve,reject)=>{
        User.findOne({username},(err,doc)=>{
            if(err)
            reject(err);
            else
            resolve(doc);
        })
    })
}

Date.prototype.addDays = function(days) {
    this.setDate(this.getDate() + parseInt(days));
    return this;
};



module.exports.allotPickup = (r,user)=>{
    return new Promise((resolve,reject)=>{

    
    Collector.findById(user.collectorId,(err,doc)=>{
        var query={
            collectorId:doc._id,
            ispending:false,
            items:doc.inventory
        }
        var pickupDate=new Date();
        pickupDate.addDays(5);
        Pickup.create({pickupDate:pickupDate,transactions:query,},(err,docc)=>{
            if(err)
           { console.log('not created')
                reject(err)   
        }
           if(docc)
            {
                console.log('alloted schedule');
                Collector.update({_id:doc._id},{$push:{pickup:docc}});
                resolve(docc+" "+doc +"collect");
            }
        })    //doubt of trans=query
    
    
    })

})
}


module.exports.requestPickup = async(req , res)=>{
    var username = 'suyash'
    console.log('req is ', req.body)
    var user = await findCollector(username)
    var pickup = await allotPickup(req.body, user)
    res.json({status:'success',});
    
}

