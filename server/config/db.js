const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const url =
      process.env.NODE_ENV === "production"
        ? process.env.MONGO_PROD_URI
        : process.env.MONGO_DEV_URI;

    const conn = await mongoose.connect(url);
    console.log("database connected", conn.connection.host);
  } catch (error) {
    console.log(error);
    throw new Error("failed to connect to database");
    process.exit(1);
  }
};

module.exports = connectDB;
