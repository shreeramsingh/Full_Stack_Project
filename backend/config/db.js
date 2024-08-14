import mongoose from "mongoose";

 export const connectDB = async () =>{
  try {
    await mongoose.connect('mongodb+srv://shreeramsingh1707:9814892161@cluster0.9ign2k0.mongodb.net/food-del', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connected successfully");
  } catch (error) {
    console.error("DB Connection error:", error);
  }
 };