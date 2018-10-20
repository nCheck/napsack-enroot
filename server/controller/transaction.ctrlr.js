const mongoose = require('mongoose');
const User = require('../model/user')
const Transaction = mongoose.model('Transaction')
const Collector = mongoose.model('Collector')
const Customer = mongoose.model('Customer')
const Wallet = mongoose.model('Wallet')


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

makeTrans = (data)=>{
    query =  {
        transacDate : Date.now,

    }
    return new Promise( (resolve , reject)=>{
        Transaction.create(query , (err, doc)=>{
            if (err){
                reject(err)
            }
            else{
                resolve(doc)
            }
        })
    } )
}

findRecId = (data)=>{
    
}



module.exports.makeTransaction = async(req , res)=>{
    var username = 'ncheck'
    var user = await findUser(username)
    var rid = await findRecId(req.body)
    var trans = await makeTrans(req.body)
    res.send(user)

}