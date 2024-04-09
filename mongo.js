


import { connect, Schema, model } from "mongoose";


connect("mongodb+srv://:@cluster0.dlwp2a9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const feedbackSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    service: {
        type : String,
        required : true
    },
    message:{
        type : String,
        required : true
    }
   
  });



const collection = model("addusers",newSchema)
const feedback = model("feeds",feedbackSchema)

export  {collection,feedback}