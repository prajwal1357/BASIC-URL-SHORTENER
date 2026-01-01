import URL from "../model/url.model.js";
import mongoose from "mongoose";
import creatUrl from "../services/url.services.js";

const addUrl=async(req,res)=>{
  const body=req.body;
try {
    const url=await creatUrl(body);
    
} catch (error) {
  console.log("errror in controller",error);
  
}


}