

// const mongoose = require("mongoose");

// const mongoURI = 'mongodb+srv://atharvarakshak23:RHsIW2YQSe1BtX5f@cluster0.dlwp2a9.mongodb.net/pawfect?retryWrites=true&w=majority&appName=Cluster0'

// const mongoDB = async()=>{
    
//     try {
//                  await mongoose.connect(mongoURI);
//                 console.log("MongoDB connected");
        
//                 const changeStream = mongoose.connection.collection("feedbacks").watch();
        
//                  // Listen for "change" events on the change stream
//                  changeStream.on("change", async (change) => {
//                     //  console.log("Change detected:", change);
        
//                     // Fetch updated data from the "feedbacks" collection
//                     const data = await mongoose.connection.collection("feedbacks").find({}).toArray();
                    
//                      // Update global feedbacks variable with the updated data
//                      global.feedbacks = data;
//                  });
//              } catch (error) {
//                  console.error("MongoDB connection error:", error);
//             }
// }

// module.exports = mongoDB



const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://atharvarakshak23:RHsIW2YQSe1BtX5f@cluster0.dlwp2a9.mongodb.net/pawfect?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async()=>{
    
   await mongoose.connect(mongoURI)
    .then(async ()=>{
        console.log("mongodb connected");

        const fetched_data = await mongoose.connection.db.collection("feedbacks");
        await fetched_data.find({}).toArray()
        .then( (data)=>{
            // const foodCategory = 
            if(!data){console.log("error loading");}
            else{
                global.feedbacks = data;
                // console.log(global.feedbacks);
            }
        })
        
    })
    .catch(()=>{
        console.log('failed');
    })
}

module.exports = mongoDB
