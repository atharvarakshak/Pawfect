const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');
const user = require('../models/feedbacks')

router.post('/feedback', [
    
    body('message','Invalid message').isLength({ min: 1 }),
    body('email').isEmail(),
    body('service').isLength({ min: 1 })
],async (req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()})
    }


     try{
        await user.create({
            email:req.body.email,
            service:req.body.service,
            message:req.body.message

        })
        res.json({success:true});
     }
     catch(error){
        console.log(error);
        res.json({success:false})
     }
})




module.exports = router;
