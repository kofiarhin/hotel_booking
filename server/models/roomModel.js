const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  roomNumbers: {
    type: [
      {
        number: String,
        unavailableDates: [Date],
      },
    ],
  },
});

module.exports = mongoose.model("Room", roomSchema);
