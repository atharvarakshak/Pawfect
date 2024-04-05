

import { connect, Schema, model } from "mongoose";
connect("mongodb://localhost:27017/akm")
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

const collection = model("newusers",newSchema)

export default collection