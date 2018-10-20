var mongoose = require('mongoose'),
	database	 = 'mongodb://sanes4:sanes4ever@ds125058.mlab.com:25058/envir-event'
	
mongoose.connect(database , { useNewUrlParser: true });
mongoose.connection.on('connected' , () =>{
	console.log('connected')
});


require('./recycle')
require('./quest')
require('./transaction')
require('./pickup')
require('./collector')
require('./customer')
require('./user')