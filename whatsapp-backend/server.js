//importing
import express from 'express'
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

//app config

const app = express()
const port = process.env.PORT || 8000

const pusher = new Pusher({
  appId: "1233264",
  key: "c33ce805418c47a65d61",
  secret: "2db55467acbc9b8c4d00",
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

//middle ware

app.use(express.json());
app.use(cors());

// app.use((req, res, next)=>{
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Header", "*");
//     next();
// });

//DB config

const connection_url = "mongodb+srv://mas:NV1G7WK5v6wckekj@cluster0.fq3ss.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.once('open',()=>{
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change)=>{
        console.log(change);
   
        if(change.operationType === 'insert'){
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp, 
                received: messageDetails.received,
            });
        }else{
            console.log('Error triggering Pusher');
        }
    });
 });

//api routes
app.get('/',(req, res)=>{ 
    res.status(200).send("hello World\n")
})

app.get('/api/v1/messages/sync', (req, res)=>{
    Messages.find((err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/api/v1/messages/new', (req, res)=>{
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data)=>{
        if(err){
            res.status(500).send(err);
        } else {
            res.status(201).send(data)  
        }
    });
});


//listen 

app.listen(port, ()=>{console.log(`Listening on localhost : ${port}`)})