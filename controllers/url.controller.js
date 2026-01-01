
import shortid from "shortid";
import URL from "../model/url.model.js";

import creatUrl from "../services/url.services.js";

const addUrl=async(req,res)=>{
  const body=req.body.redirect;
try {
    const url=await creatUrl(body);
    res.status(201).json("url created")
    return url
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
  const entry=await URL.findOneAndUpdate({shortid:id},{
    $push:{
      visited:{timestamp:Date.now()}
    }
  })

   res.redirect(entry.redirect)
}

const analytics=async(req,res)=>{
  const id=req.params.id;
  const total=await URL.findOneAndUpdate( {shortid:id} )
  if(total){
    res.status(200).json({
      totalClick:total.visited.length,
      vistHistroy:total.visited
    })
  }
  
}
export default {addUrl,getUrl,redirect,analytics} 