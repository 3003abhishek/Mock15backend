const express=require("express");
const {UserModel}=require("../model/User.model");

const signupRouter=express.Router();



signupRouter.post("/",async(req,res)=>{
       try{
         let payload=req.body;
         let user=new UserModel(payload);
         user.save();
        //  console.log(payload);
         res.send("User registered successfully");

       }
       catch(err){
         res.send(err.message);
       }
    //    res.send("User registered successfully");
});



module.exports={
    signupRouter
}