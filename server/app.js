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

app.get('',(req,res)=>
{
    res.send('1');
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
///Use routes
app.use('/auth',authRoute);
app.use('/transac', transRoute)
app.use('/api', apiRoute)

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
