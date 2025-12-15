// const mongoose = require('mongoose');
import mongoose from "mongoose";

// const connectDB = async () => {
export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTIONSTRING);

    console.log("Successfully connected to database!");
  } catch (error) {
    console.error("Error connecting to database:", error);
    process.exit(1); // exit with error
  }
};
// module.exports = { connectDB };