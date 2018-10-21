var mongoose = require('mongoose')
var User = mongoose.model('User')
var tranMod = require('./transaction.ctrlr')
var sortJsonArray = require('sort-json-array');
var Quest = mongoose.model('Quest')


getAllUsers = ()=>{
    


    return new Promise( (resolve, reject)=>{
        
        User.find().populate('customerId').then(user=>{
            users = []
            // console.log(user)
            user.forEach(d => {
                if ( d.role == 'Customer' )
                    users.push({name : d.username , points : d.customerId.wallet})
            });
            users.sort(SortByPoint)
            resolve(users)
        } , err=>{
            reject(err)
        })
    } )
}




function SortByPoint(x,y) {
    return y.points - x.points; 
  }



//////Module Exports


module.exports.sendLeaderboard = async(req , res)=>{
    var users = await getAllUsers()
    res.json(users)
}

module.exports.createQuest = (req , res)=>{
    req.body.item = mongoose.Types.ObjectId(req.body.item)
    Quest.create(req.body , (err , doc)=>{
        res.json(doc)
    })
}

module.exports.sendQuest = (req, res)=>{
    Quest.find({} , (err, doc)=>{
        if(err){
            res.send('error')
        }
        else{
            res.json(doc)
        }
    })
}