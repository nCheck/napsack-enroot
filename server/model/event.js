var mongoose = require('mongoose');
var Schema = mongoose.Schema

var eventSchema = new mongoose.Schema({
    eventName:String,
    description:String,
    rules:{
        rule1:String,
        rule2:String,
        rule3:String
    },
    eventType:{
        type:String,
        enum:['Verifying','Collection'],

    },
    eventMode:{
        type:String,
        enum:['Individual','Team'],
    },
    startDate:Date,
    endDate:Date,
    organised_by:{
        type:Schema.Types.ObjectId,
        ref:'Customer'
    }
})

module.exports = mongoose.model('Event',eventSchema);