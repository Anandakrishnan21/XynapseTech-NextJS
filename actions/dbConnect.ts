import mongoose from "mongoose";

const connectMongo = async () => {
  await mongoose
    .connect(String(process.env.MONGO_URI))
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
};

export default connectMongo;
