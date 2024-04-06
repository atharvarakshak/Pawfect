import 'dotenv/config';
import { connect, Schema, model } from "mongoose";

const url = 'mongodb+srv://atharvarakshak23:3Bgl2JSytzPo08c1@cluster0.dlwp2a9.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0';
console.log(`URL used: ${url}`);

connect(url)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})
const newSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isLoggedIn: {
        type: Boolean,
        default: false 
    }
});


const collection = model("addusers",newSchema)

export default collection