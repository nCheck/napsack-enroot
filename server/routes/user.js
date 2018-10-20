var express=require('express');
var router=express.Router();
var userctrlr=require('../controller/user.ctrlr');

router
.route('/createProfile')
.get((req,res)=>{
    res.render('profile')//to be done
})
.post(userctrlr.profileCreation);


module.exports = router