import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();


const connectDB = async () => {
  try {
    // Establish connection
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`, {
    });
    console.log("Server are connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Export the function
export default connectDB;
