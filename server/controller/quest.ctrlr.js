var mongoose = require('mongoose')
var User = mongoose.model('User')
var tranMod = require('./transaction.ctrlr')
var sortJsonArray = require('sort-json-array');



getAllUsers = ()=>{
    


    return new Promise( (resolve, reject)=>{
        
        User.find({ role: 'Customer'}).populate('customerId').then(user=>{
            users = []
            user.forEach(d => {
                users.push({name : d.username , points : d.customerId.wallet})
            });
            users = sortJsonArray(users , 'points')
            resolve(users)
        } , err=>{
            reject(err)
        })
    } )
}








//////Module Exports


module.exports.sendLeaderboard = async(req , res)=>{
    var users = await getAllUsers()
    res.json(users)
}
