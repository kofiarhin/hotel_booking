const express = require("express");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const roomRoutes = require("./routes/roomRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();

// setup middleware
app.use(cookieParser());
app.use(express.json());


// connect to database
connectDB();

// setup routes
app.use("/rooms", roomRoutes);
app.use(errorHandler);

const port = process.env.PORT;

app.listen(port, () => console.log(`listening on port ${port}`));
