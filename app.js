import express from "express";

import collection from "./mongo.js"
import cors from"cors"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password, isLoggedIn}=req.body

    try{
        const check=await collection.findOne({email:email})
        if(isLoggedIn){

            res.json("loggedin")
        }
        if(check ){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{email,password,isLoggedIn}=req.body

    const data={
        email:email,
        password:password,
        isLoggedIn:isLoggedIn
    }

    try{
        const check=await collection.findOne({email:email})
        if(isLoggedIn){

            res.json("loggedin")
        }
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
app.post("/signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password,
        isLoggedIn:isLoggedIn
    }

    try{
        const check=await collection.findOne({email:email})
        if(isLoggedIn){

            res.json("loggedin")
        }
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3001,()=>{
    console.log("port connected");
})
