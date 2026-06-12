import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("MONGODB_URI =", process.env.MONGODB_URI);

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database Connected");
  } catch (error) {
    console.log("FULL ERROR:");
    console.log(error);
  }
};

export default connectDB;