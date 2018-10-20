var mongoose = require('mongoose');
var User = mongoose.model('User');

//===To display all users =============
module.exports.viewingRegion=(req,res)=>{

		if(req.user.role==='Customer')
			res.redirect('/customerPage');	
		else{
			res.redirect('/collectorPage');
		}
	}

/// User Creation (useless i suppose)

module.exports.addOne = (req, res)=> {
	User.create({
		username : req.body.username,
		password : req.body.password,
		role : req.body.role,
	});
}
