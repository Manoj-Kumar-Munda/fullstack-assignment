import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}cardsDB`
    );
    if (connectionInstance) {
      console.log("Database connected");
    }
  } catch (error) {
    console.log("Failed to connect to database");
  }
};

export default connectDB;
