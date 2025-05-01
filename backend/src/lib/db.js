import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in the .env file");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected!");
  } catch (err) {
    console.error("Mongoose not connected!", err);
  }
};
