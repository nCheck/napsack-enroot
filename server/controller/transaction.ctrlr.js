const mongoose = require('mongoose');
const User = require('../model/user')
const Transaction = mongoose.model('Transaction')
const Collector = mongoose.model('Collector')
const Customer = mongoose.model('Customer')
const Wallet = mongoose.model('Wallet')

const DATA = {
    "Glass Bottle": {
        "item" : "Glass Bottle",
        "id" : "5bcb03c64f37e84f9ac5012a",
        "count" : 0
    },
    "TetraPacks": {
        "item" : "TetraPacks",
        "id" : "5bcb03c64f37e84f9ac5012c",
        "count" : 0
    },
    "Plastic Bottle": {
        "item" : "Plastic Bottle",
        "id" : "5bcb03c64f37e84f9ac5012b",
        "count" : 0
    },
    "Card board Box": {
        "item" : "Card board Box",
        "id" : "5bcb03c64f37e84f9ac5012d",
        "count" : 0
    },
    "Wrappers": {
        "item" : "Wrappers" ,
        "id" : "5bcb03c64f37e84f9ac5012es",
        "count" : 0
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

calTransac = (items)=>{
    var trans = 0.0
    var values = [0.2, 0.4, 0.1, 0.35, 0.15]
    var i = 0
    items.forEach(ele => {
        trans += values[i]*ele['count']
    });
    return trans
}




//Hardcode points, points can be searched later

makeTrans = (data)=>{
    transacValue = calTransac()
    items = [ { item : '5bcb03c64f37e84f9ac5012a' , count : data["Glass Bottle"] } , 
              { item : '5bcb03c64f37e84f9ac5012c' , count : data["TetraPacks"] } ,
              { item : '5bcb03c64f37e84f9ac5012b' , count : data["Plastic Bottle"] } ,
              { item : '5bcb03c64f37e84f9ac5012d' , count : data["Card board Box"] } ,
              { item : '5bcb03c64f37e84f9ac5012es' , count : data["Wrappers"] } ,
            ]

    transacValue = await calTransac(items)

    query =  {
        transacDate : Date.now,
        items : items,
        transacValue : transacValue

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
     DATA["Glass Bottle"]["count"] =  data['Glass Bottle']
     DATA["TetraPacks"]["count"] =  data["TetraPacks"]
     DATA["Plastic Bottle"]["count"] =  data["Plastic Bottle"]
     DATA["Card board Box"]["count"] =  data["Card board Box"]
     DATA["Wrappers"]["count"] =  data["Wrappers"]
     return DATA
}

///////////////////////EXPORTS

module.exports.generateTransaction = async(req , res)=>{
    var username = 'ncheck'
    var user = await findUser(username)
    var trans = await makeTrans(req.body)
    res.send(user)

}