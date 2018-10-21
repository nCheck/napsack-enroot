var express=require('express');
var router=express.Router();
var userctrlr=require('../controller/user.ctrlr');
var collector=require('../controller/collector.ctrlr');
var transaction=require('../controller/transaction.ctrlr')
router
.route('/createProfile')
    .post(userctrlr.profileCreation);


router
.route('/allotpickup')
.post(collector.allotPickup);

module.exports = router

// router
// .route("generateTransaction")
// .post(transaction.makeTrans)