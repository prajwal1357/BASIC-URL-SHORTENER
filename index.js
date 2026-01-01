import express from"express";
import connectDB from "./database/url.database.js";
import router from "./routes/routes.model.js";
const app=express();
connectDB();
app.use(express.json());
app.use("/",router)
app.get("/",(req,res)=>{
res.send("server is working ")
})
app.listen(3000,()=>{
  console.log("server started at port 3000")
})