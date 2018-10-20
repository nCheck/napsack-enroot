var express=require('express');
var router=express.Router();
var User=require('../model/user');
var passport=require('passport');
var userCtrlr=require('../controller/user.ctrlr');
router
.route('/register')
.get(function(req,res){
	res.render('register.ejs' , {req:req})
})
.post(function(req,res){
	var username =req.body.username,
	password = req.body.password;
	console.log(req.body);
	User.register(new User({username:username}),password,function(err,user){
		if (err)
			{   	console.log(err)
				res.json({status : false})
			}
		else{

			console.log('i m here');
			user.name = req.body.name
			user.role = req.body.role
			user.phoneNo = req.body.phoneNo
			user.save()
			passport.authenticate('local')(req,res,function(){
				res.json({status : true})
			});

		}
	})
});



router
.route('/login')
.get(function(req,res){
	res.render('login.ejs')
})
.post(passport.authenticate("local",),userCtrlr.viewingRegion)//middleware for checking database


function isLoggedIn(req, res, next){
	console.log(req+" in post of login");
	console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        return next();
	}
	console.log('failed');
    res.send('no');
}


router
.route('/logout')
.get( function(req, res){
    req.logout();
    res.redirect("/login");
});
module.exports=router