const mongoose=require('mongoose')

const dbStruct=mongoose.Schema({
    message:String,
    name:String,
    time:String,
    recieved:Boolean
});

module.exports=mongoose.model('data',dbStruct);