require('dotenv').config()
const express=require('express')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const mongoose=require('./database/database')
const User=require('./model/Schema')
const app=express()

const port=process.env.port || 1100

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.use(cors())

app.get('/',(req,res)=>{
    res.json({
        status:"success",
        message:"Welcome to authentication"
    })
})

//use router
app.use('/',require('./routers/router'))

//listen port
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})