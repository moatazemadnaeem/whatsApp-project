const express =require('express')
const mongoose =require('mongoose')
const DB=require('./mongoDB')

const connection_url="mongodb+srv://Moataz:Moataz0101@cluster0.ke2gb.mongodb.net/whatsapp_mern?retryWrites=true&w=majority";
//app congif
const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1110448",
  key: "b32588e4974ecdb093a9",
  secret: "7452d0b9255a88c154ef",
  cluster: "eu",
  useTLS: true
});

const db=mongoose.connection;
db.once("open",()=>{

    console.log("connected to dataBase");
    const msgconnection=db.collection('datas');
    const changeStream=msgconnection.watch();
    changeStream.on("change",(change)=>{
        console.log(`change occured : ${change.fullDocument}`);
        if(change.operationType==="insert"){
             const msgDetails=change.fullDocument;
             pusher.trigger('messages','inserted',{
                 name:msgDetails.name,
                 message:msgDetails.message,
                 time:msgDetails.time,
                 recieved:msgDetails.recieved
             })
        }
        else{
            console.log("failed to trigger pusher...");
        }
       
    })
})
const app=express();

const port=9000;
//midelwares
app.use(express.json());
app.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 
//DB config
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
//endpoints
app.post('/messages/v1',(req,res)=>{
    const data=req.body;
    DB.create(data,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(201).send(data)
        }
    })

})
app.get('/messages/v2',(req,res)=>{
    DB.find((err,data)=>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
});

app.listen(port);

