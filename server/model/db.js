var mongoose = require('mongoose'),
	database	 = 'mongodb://sanes4sanes4ever@ds125058.mlab.com:25058/envir-event',
	
mongoose.connect(database);
mongoose.connection.on('connected' , () =>{
	console.log('connected')
});
