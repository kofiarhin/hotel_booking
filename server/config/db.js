const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("database connected");
  } catch (error) {
    console.log(error);
    throw new Error("failed to connect to database");
    process.exit(1);
  }
};

module.exports = connectDB;
