import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { DBNAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DBNAME}`
    );
    console.log(`MONGODB connected: ${connectInstance.connection.host}`);

  } catch (err) {
    console.log("MONGODB connection error ", err);
    process.exit(1);
  }
};

export default connectDB;