var express=require('express');
var router=express.Router();
var transCtrl = require('../controller/transaction.ctrlr')

router.route('/dummy')
    .post(transCtrl.dummyPost)
    .get((req, res)=>{
        res.json({message : "Hello"})
    })





module.exports = router