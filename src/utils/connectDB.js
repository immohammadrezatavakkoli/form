import mongoose from "mongoose";

async function connectDB() {
    try {
        if(mongoose.connection.readyState !== 1) {
            await mongoose.connect(process.env.MONGO_URL);
            console.log("Connected to MongoDBnp");
        }
    } catch(err) {
        console.error('Connection failed:', err);
    }
}

export default connectDB;