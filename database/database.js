require('dotenv').config()
const mongoose=require('mongoose')
const User=require('../model/Schema')
mongoose.connect(process.env.uri,{
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log('Database is connected successfully..')
}).catch((err)=>{
    console.log(err)
})