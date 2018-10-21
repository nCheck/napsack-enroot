var express=require('express');
var router=express.Router();
var transCtrl = require('../controller/transaction.ctrlr')
var user=require('../controller/user.ctrlr');
router.route('/dummy')
    .post(transCtrl.dummyPost)
    .get((req, res)=>{
        res.json({message : "Hello"})
    })

router.route('/user')
    .get((req,res)=>{
        res.send(req.user)
    })

router
.route('/createEvent')
.post(user.createEvent)

module.exports = router