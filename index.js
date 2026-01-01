import express from"express";
const app=express();

app.get("/",(req,res)=>{
res.send("server is working ")
})
app.listen(3000,()=>{
  console.log("server started at port 3000")
})