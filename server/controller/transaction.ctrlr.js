const mongoose = require('mongoose');
const Transaction = mongoose.model('Transaction')
const Collector = mongoose.model('Collector')
const Donator = mongoose.model('Donator')
const Wallet = mongoose.model('Wallet')




module.exports.makeTransaction = (req , res)=>{
    var username = req.user.username
    
}