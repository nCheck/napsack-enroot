var express=require('express');
var router=express.Router();
var User=require('../model/user');
var transCtrl = require('../controller/transaction.ctrlr')

router.route('/generate')
    .post(transCtrl.generateTransaction)

router.route('/verify')
    .post(transCtrl.verifyTransaction)

router.route('/all')
    .get(transCtrl.seperateTransactions)

router.route('/test')
    .get((req , res)=>{
        res.send({status:true , message : 'Sucess'})
    })

module.exports=router