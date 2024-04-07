import express from "express";
import bcrypt from "bcrypt";
import  {collection,feedback} from "./mongo.js"
import cors from"cors"
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await collection.findOne({ email: email });
      if (user) {
        // Compare hashed password with the entered password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
          res.json("exist");
        } else {
           
            res.json("invalidPassword");
        }
      } else
       {
        res.json("notexist");
      }
    } catch (e) {
      console.error(e);
      res.json("fail");
    }
  });


app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
  
    
    try{
        const check=await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
            const data={
                email:email,
                password:hashedPassword
            }
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
