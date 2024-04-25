const express = require('express')
const router = express.Router()



router.post('/displayfeedback',(req,res)=>{
    try{
        // console.log(global.feedbacks);
        res.send([global.feedbacks])

    }
    catch(error){
        console.error(error.message);
        res.send("server Error")
    }
})
module.exports = router;