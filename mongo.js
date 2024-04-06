


import { connect, Schema, model } from "mongoose";


connect("mongodb+srv://atharvarakshak23:3Bgl2JSytzPo08c1@cluster0.dlwp2a9.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0")
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


const collection = model("addusers",newSchema)

export default collection