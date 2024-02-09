const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const cors = require("cors");
const app = express();

// setup middleware

app.use(cookieParser());
app.use(express.json());

// connect to database
connectDB();

// setup routes

// testing stuff

//testing get users
app.get("/users", (req, res) => {
  return res.json({ messge: "get list of users" });
});

app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/build")));

  app.get("*", (req, res) => {
    const fileUrl = path.resolve(__dirname, "server", "build");

    console.log(fileUrl);
    return res.sendFile(fileUrl);
  });
}
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));
