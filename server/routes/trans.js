var express=require('express');
var router=express.Router();
var User=require('../model/user');
var transCtrl = require('../controller/transaction.ctrlr')
var wallet=require('../controller/user.ctrlr')
router.route('/generate')
    .post(transCtrl.generateTransaction)

router.route('/cverify')
    .post(transCtrl.verifyCode)    

router.route('/verify')
    .post(transCtrl.verifyTransaction)

router.route('/all')
    .get(transCtrl.seperateTransactions)

router.route('/test')
    .get((req , res)=>{
        res.send({status:true , message : 'Sucess'})
    })
router
.route('/wallet')
.get(wallet.sendBal)
.post(wallet.spend)
module.exports=router