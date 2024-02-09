const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();

// setup middleware
app.use(cookieParser());
app.use(express.json());

// connect to database
connectDB();

// setup routes

// testing stuff
app.get("/", (req, res) => {
  return res.json({ message: "welcome" });
});

//testing get users
app.get("/users", (req, res) => {
  return res.json({ messge: "get list of users" });
});

app.use("/rooms", roomRoutes);
app.use("/bookings", bookingRoutes);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));
