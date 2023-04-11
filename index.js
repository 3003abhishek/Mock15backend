const express=require("express");
const {connection}=require("./db");
const {signupRouter}=require("./routes/signup.routes");
const {loginRouter}=require("./routes/login.routes");
const app=express();

app.use(express.json());

app.use("/signup",signupRouter);
app.use("/login",loginRouter);






app.listen(8080,async()=>{

try{
  await connection;
  console.log("Connected to the db");
}

catch(err){
console.log(err.message);
}



    console.log("App is running at port 8080");
})