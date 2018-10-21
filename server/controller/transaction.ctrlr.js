const mongoose = require('mongoose');
const User = require('../model/user')
const Transaction = mongoose.model('Transaction')
const Collector = mongoose.model('Collector')
const Customer = mongoose.model('Customer')
const Code = mongoose.model('Code')


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
        "id" : "5bcb03c64f37e84f9ac5012e",
        "count" : 0
    }
}


findTrans = (tid)=>{
    return new Promise( (resolve, reject)=>{
        Transaction.findOne({_id : tid} , (err , doc)=>{
            if(err){
                reject(err)
            }else{
                resolve(doc)
            }
        })
    })    
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
        if (! isNaN(ele['count']))
            trans += values[i]*ele['count']
    });
    return trans
}




//Hardcode points, points can be searched later

makeTrans = (data, user)=>{//data is req.body
    items = [ { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012a') , count : data["Glass Bottle"] } , 
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012c') , count : data["TetraPacks"] } ,
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012b') , count : data["Plastic Bottle"] } ,
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012d') , count : data["Card board Box"] } ,
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012e') , count : data["Wrappers"] } ,
            ]

    console.log(data)
    transacValue = calTransac(items)

    query =  {
        transacDate : Date.now(),
        items : items,
        transacValue : transacValue,
        customerId : mongoose.Types.ObjectId(user.customerId),
        collectorId:mongoose.Types.ObjectId(user.collectorId)
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

updateTrans = (data, tid)=>{
    items = [ { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012a') , count : data["Glass Bottle"] } , 
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012c') , count : data["TetraPacks"] } ,
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012b') , count : data["Plastic Bottle"] } ,
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012d') , count : data["Card board Box"] } ,
              { item : mongoose.Types.ObjectId('5bcb03c64f37e84f9ac5012e') , count : data["Wrappers"] } ,
            ]
            
    transacValue = calTransac(items)

    query =  {
        transacDate : Date.now(),
        items : items,
        transacValue : transacValue,
        isPending : false
    }

    return new Promise( (resolve, reject)=>{
        Transaction.findOne({_id : tid} , (err , doc)=>{
            if(err){
                reject(err)
            }
            else{
                doc.transacDate = Date.now()
                doc.items = items
                doc.transacValue = transacValue
                doc.isPending = false
                doc.save()
                resolve(doc)
            }
        })
    })
}

// updateInventory=(r,collector,transaction)=>{
//     Collector.findById(collector.populate('transactions').exec((err,doc)=>{
//         var trans=doc.transactions;
//         var invent=doc.inventory
//         trans.findById(transaction._id,(err,docc)=>{
//             invent.forEach(items=>{
//                 docc.items.forEach(ditems=>{
//                     if(items['item']===ditems['item'])
//                     {
//                         items['count']+=ditems['count'];
//                     }
//                 })
                
            })
        })
    })
    )}

getAllTransactions = (uid, role)=>{
    return new Promise( (resolve , reject)=>{
        if (role == 'Customer'){
            console.log('inside customer')
            User.findById(uid).populate({path : 'customerId' , populate : {
                path : 'transactions',
                model : 'Transaction'
            }}).then(res=>{
                resolve(res.customerId.transactions)
            }, err=>{
                reject(err)
            })
        }
        else{
            User.findById(uid).populate({path : 'collectorId' , populate : {
                path : 'transactions',
                model : 'Transaction'
            }}).then(res=>{
                resolve(res.collectorId.transactions)
            }, err=>{
                reject(err)
            })
        }
    })
}


module.exports = {
    findUser
}

///////////////////////EXPORTS

module.exports.generateTransaction = async(req , res)=>{
    var username = 'ncheck'
    console.log('req is ', req.body)
    var user = await findUser(username)
    var trans = await makeTrans(req.body , user)
    user.save()
    trans.save()
    Code.create({transId : trans._id} , (err,doc)=>{
        res.json({ code : doc.code , status : 'OK' })
    })
    

}

module.exports.verifyCode = async(req , res)=>{
    var code = req.body.code
    Code.find({code : code} , async(err , doc)=>{
        if (err){
            res.send({status : false })
        }
        else{
            var trans = await findTrans( doc.transId )
            res.json({status : true , trans  : trans })
        }
    } )
}

module.exports.verifyTransaction = async(req , res)=>{
    var username = 'shreya'
    console.log('req is ', req.body)
    var user = await findUser(username)
    var trans = await updateTrans(req.body, req.body.tid , user)
    // var inventory = await updateInventory(req.body,user.collectorId,trans)
    var uQuests = user.quests
    for(i = 0 ; i < uQuests.length ; i++){
        for( j = 0 ; j < trans.items.length ; j++){

        }
    }
    res.json(trans)
    
}

module.exports.seperateTransactions = async(req , res)=>{
    var username = 'ncheck'
    var user = await findUser(username)
    var transactions = await getAllTransactions(user._id , user.role)
    var pending = [] , completed = []
    transactions.forEach(trans => {
        if (trans.isPending == true){
            pending.push(trans)
        }
        else{
            completed.push(trans)
        }
    });
    res.json({pending:pending, completed: completed})
}




module.exports.dummyPost = (req , res)=>{
    console.log(req.body)
    res.send("Done")
}

module.exports.sendBal=(req,res)=>{
	User.findOne({username:req.user.username},(err,doc)=>{
		
		if(err)
		{
			console.log(err+" sd")
		}
		if(doc==null)
		res.json({status:'failed'})
	if(doc.role === 'Customer')
	{
		Customer.findById(doc.customerId,(err,docc)=>{
			if(err)
			console.log(err+" no user")
			res.json({balance:docc.wallet,status:'ok'})
		})
	}
			
		else
		{
			Collector.findById(doc.collectorId,(err,docc)=>{
				res.json({balance:docc.wallet,status:'ok'})
			})
			

		}
		})
}

module.exports.spend=(req,res)=>{
	User.findOne({username:req.user.username},(err,doc)=>{
		if(err)
		console.log(err)
		if(doc==null)
		res.json({status:'no id found'})
		if(doc.role === 'Customer')
		{
			Customer.findById(doc.customerId,(err,docc)=>{
				if(err)
				console.log(err+" no user")
				else{
				docc.wallet-=req.amt
					res.json({balance:docc.wallet,status:'ok'})
					
	
				}
			})
		}
				
			else
			{
				Collector.findById(doc.collectorId,(err,docc)=>{
					if(err)
					console.log(err)
					if(docc==null)
					res.json({Status:'invalid balance'})

					else{
					
							res.json({balance:docc.wallet,status:'ok'})
				
						}
				})
				
	
			}
	})
}






