import URL from "../model/url.model.js";
import mongoose from "mongoose";
import creatUrl from "../services/url.services.js";

const addUrl=async(req,res)=>{
  const body=req.body;
try {
    const url=await creatUrl(body);
    res.status(201).json("url created")
} catch (error) {
  console.log("errror in controller",error);
  
}



}
const getUrl=async(req,res)=>{
const url=await URL.find({});
res.status(200).json(url)
return url
}

const redirect=async(req,res)=>{
  const id=req.params.id;
  const entry=await URL.findOneAndUpdate(id,{
    $push:{
      visited:{timestamp:Date.now()}
    }
  })
  await res.redirect(entry.redirect)
}
export default {addUrl,getUrl,redirect}