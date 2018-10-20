var express=require('express');
var router=express.Router();
// var User=require('../model/user');
var transCtrl = require('../controller/transaction.ctrlr')

router.route('/')
    .get(transCtrl.generateTransaction)




    module.exports=router