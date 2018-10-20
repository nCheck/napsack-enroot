var express=require('express');
var router=express.Router();
var userctrlr=require('../controller/user.ctrlr');

router
.route('/createProfile')
    .post(userctrlr.profileCreation);


module.exports = router