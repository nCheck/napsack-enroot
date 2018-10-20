var Collector=require('../model/collector');
var Customer=require('../model/customer');
var User=require('../model/user');



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

getPickup=(r,user)=>{
    
}


module.exports.requestPickup= async(req , res)=>{
    var username = 'suyash'
    console.log('req is ', req.body)
    var user = await findCollector(username)
    var pickup = await getPickup(req.body, req.body.tid , user)
    res.json(trans)
    
}

