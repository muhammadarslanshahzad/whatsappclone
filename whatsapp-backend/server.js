//importing
import express from 'express'
import mongoose from 'mongoose';
import dbMessage from './dbMessages.js';
import Messages from './dbMessages.js';
//app config

const app = express()
const port = process.env.PORT || 8000

//middle ware

//DB config
const connection_url = "mongodb+srv://admin:EWhD6RiaOdIyhzba@cluster0.sgr9b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex: true, 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//......
 
//api routes
app.get('/',(req, res)=>{
    res.status(200).send("hellow World\n")
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