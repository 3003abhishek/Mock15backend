const express=require("express");
const {UserModel}=require("../model/User.model");

const jwt=require("jsonwebtoken");

const loginRouter=express.Router();



loginRouter.post("/",async(req,res)=>{

    try{
     let payload=req.body;
    let user=UserModel.find(payload);

    if(user){
        console.log(user);
        let token=jwt.sign({user_id:user._id},"gandhi");
        res.send({message:"User Loged in successfully",token});
    }
    else{
        res.send("Wrong credentials");
    }
    }

    catch(err){
     console.log(err.message);
    }
      
});



module.exports={
    loginRouter
}