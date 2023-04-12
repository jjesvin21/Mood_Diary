const express = require('express');
const  route  = require('./routes/userroutes');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const userroute = require('./routes/userroutes');
const dairyroute = require('./routes/dairyroutes');
const app = express();


mongoose.connect(process.env.MONGO)
    .then(()=>{
        console.log("db connected");
    })
    .catch((err)=>{
        console.log(err);
    })

app.use(cors({
    origin:["https://mood-diary-daqw.vercel.app","http://localhost:3000"]
}));
app.use(express.json());

app.use("/mooddairy/user",userroute);
app.use("/mooddairy/dairy",dairyroute);

app.listen(8000,()=>{
    console.log("sever satrted");
})