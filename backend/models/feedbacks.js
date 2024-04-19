const mongoose = require("mongoose");

const {Schema} = mongoose;

const feedbackSchema = new Schema({
    email:{
        type:String,
        required:true,
    },
    service:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true
    }

})
module.exports = mongoose.model('feedbacks',feedbackSchema);