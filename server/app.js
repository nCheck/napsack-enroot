var express=require('express');
var app=express();
var parser                = require('body-parser');
var mongoose              = require('mongoose');
const dir                 = __dirname;
var passport=require('passport');
var localstrategy         = require('passport-local');
var passportlocalmongoose = require('passport-local-mongoose');
var port=2535;
require('./model/db')

///Models
var User = require('./model/user');
var Recycle = require('./model/recycle')
var Customer = require('./model/customer')
app.get('',(req,res)=>
{
    res.send('Ek No.');
})



// === Passport Setup ===

app.use(require('express-session')({
	secret:'short' ,
	resave:false,
	saveUninitialized:false
}))

app.use(passport.initialize())
app.use(passport.session())
passport.use(new localstrategy(User.authenticate()));	//User.authenticate present in passportlocal mongoose so no need to define in users.js
passport.serializeUser(User.serializeUser())		//No need to define function User.serializeUser since we used
passport.deserializeUser(User.deserializeUser())	//passport local mongoose it already has those function



app.set('view engine', 'ejs');
app.use(parser.urlencoded({extended:true}));
app.use(parser.json());


///Require Routes
var authRoute=require('./routes/auth.js');
var transRoute = require('./routes/trans');
var apiRoute = require('./routes/api')
var userRoute=require('./routes/user');						//User profile creation
var questRoute = require('./routes/quest')

///Use routes
app.use('/auth',authRoute);
app.use('/transac', transRoute)
app.use('/api', apiRoute)
app.use('/user',userRoute);
app.use('/quest', questRoute)

app.listen(port , function () {
	console.log('Site is active on localhost:' + port+'/');
});

// User.create({
//     username : 'ncheck',
//     password : 'ncheck'
// } , )

// Recycle.create({item : 'Glass Bottle' , value : 0.2 })
// Recycle.create({item : 'Plastic Bottle' , value : 0.2 })
// Recycle.create({item : 'TetraPacks' , value : 0.2 })
// Recycle.create({item : 'Card board Box' , value : 0.2 })
// Recycle.create({item : 'Wrappers' , value : 0.2 })

// Customer.create({name:"Nehal Kalnad" , phoneNo : 9762622540
// 	, transactions : [mongoose.Types.ObjectId("5bcb1a3c6f9b1d6a5a6812cf")]} , (err,  doc)=>{
// 		console.log(doc)
// 	})

// Customer.findById('5bcb4262bd80d525184534fd').populate('transactions').then(res=>{
// 	console.log(res)
// })

// User.findById("5bcaf43412fdd540943678a8").populate({path : 'customerId' , populate : {
// 	path : 'transactions',
// 	model : 'Transaction'
// }}).then(res=>{
// 	console.log(res.customerId.transactions)
// }, err=>{
// 	console.log(err)
// })

// User.updateOne({username : 'ncheck'} , {customerId : mongoose.Types.ObjectId("5bcaf43412fdd540943678a8")} , (err, doc)=>{
// 	console.log(doc)
// })