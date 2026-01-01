
import shortid from "shortid";
import URL from "../model/url.model.js";

const creatUrl=async (data)=>{
 const url=await URL.create({
   redirect:data,
   shortid:shortid.generate(),
   visited:[{
     timestamp: Date.now(),
   }
   
   ]
  });
  return url
}

export default creatUrl;