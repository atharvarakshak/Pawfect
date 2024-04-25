const mongoose = require("mongoose");

const mongoURI = 'mongodb+srv://atharvarakshak23:RHsIW2YQSe1BtX5f@cluster0.dlwp2a9.mongodb.net/pawfect?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("MongoDB connected");

        // Create a change stream on the "feedbacks" collection
        const changeStream = mongoose.connection.collection("feedbacks").watch();

        // Listen for "change" events on the change stream
        changeStream.on("change", async (change) => {
            console.log("Change detected:", change);

            // Fetch updated data from the "feedbacks" collection
            const data = await mongoose.connection.collection("feedbacks").find({}).toArray();
            
            // Update global feedbacks variable with the updated data
            global.feedbacks = data;
        });
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
}

module.exports = mongoDB;
