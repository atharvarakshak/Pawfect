const express = require('express')

const router = express.Router()
const user = require('../models/Signup')

router.post('/createuser',async (req,res)=>{
     try{
        await user.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password

        })
        res.json({success:true});
     }
     catch(error){
        console.log(error);
        res.json({success:false})
     }
})

module.exports = router;
