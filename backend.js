require('dotenv').config()
const express=require('express');
const app=express();
const port=process.env.PORT || 3001;
app.get("/",(req,res)=>{
    res.send(`<h1>"hello world"</h1>`);
})
app.get("/about",(req,res)=>{
    res.send("this is an app")
})
app.listen(port,()=>{
    console.log(`port is listening on port ${port}`)
})