var express=require('express');
var router=express.Router();
var transCtrl = require('../controller/transaction.ctrlr')

router.route('/dummy')
    .post(transCtrl.dummyPost)
    .get((req, res)=>{
        res.send("Hello Ashley")
    })





module.exports = router