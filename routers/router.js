const controller=require('../controller/controller')
const User=require('../model/Schema')
const route=require('express').Router()

let auth =(req,res,next)=>{
    let token =req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) throw err;
        if(!user) return res.json({
            error :true
        });

        req.token= token;
        req.user=user;
        next();

    })
}

route.post('/register',controller.registerRoute)

route.post('/login',controller.loginRoute)

route.get('/logout',auth,controller.logoutRoute)

module.exports=route