import mongoose from "mongoose";


const shortSchema=mongoose.Schema({
  redirect:{
    type:String,
    required:true,
  },
  shortid:{
    type:String,
    required:true  },
    visited:[
      {
        timestamp:{
          type:String
        }
      }
    ],

},{timestamps:true});

export default mongoose.model("URL",shortSchema)
