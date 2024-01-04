import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config()

const connectDB=async()=>{
    mongoose.set("strictQuery", true);
    console.log("establishing connection to database...");
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("DB CONNECTED");
        })
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;