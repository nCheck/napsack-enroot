var mongoose=require('mongoose')
var Schema=mongoose.Schema;

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var qSchema = mongoose.Schema({
    name : String ,
    item :{
        type : Schema.Types.ObjectId,
        ref : 'Recycle'
    } ,
    startDate : {
        type : Date,
        default : Date.now()
    } ,
    endDate : {
        type : Date , 
        default : new Date('November 15, 2018 23:15:30')
    } ,
    point : {
        type : Number,
        default : 10
    } ,
    required : {
        type : Number,
        default : 10
    } 
})







module.exports = mongoose.model('Quest', qSchema);