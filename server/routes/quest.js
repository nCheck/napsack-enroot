var express=require('express');
var router=express.Router();
var User=require('../model/user');
var transCtrl = require('../controller/transaction.ctrlr')
var questCtrl = require('../controller/quest.ctrlr')

router.route('/leaderboard')
    .get(questCtrl.sendLeaderboard)



module.exports=router