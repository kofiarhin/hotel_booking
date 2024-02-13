const Booking = require("../models/bookingModel");
const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find().populate("roomId");
    if (!bookings) {
      res.status(400);
      throw new Error("bookings not found");
    }

    return res.status(200).json(bookings);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// create booking
const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    if (!booking) {
      res.status(400);
      throw new Error("there was a problem creating booking");
    }
    return res.json(booking);
  } catch (error) {
    next(error);
  }
};

// get single booking
const getBooking = async (req, res, next) => {
  const id = req.params.id;
  try {
    const booking = await Booking.findById(id).populate("roomId");
    if (!booking) {
      res.status(400);
      throw new Error("booking not found");
    }

    return res.status(200).json(booking);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// update booking
const updateBooking = async (req, res, next) => {
  console.log("update bookings");
  const { id } = req.params;

  try {
    const booking = await Booking.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    // get all bookings
    const bookings = await Booking.find();
    return res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// delete single booking
const deleteBooking = async (req, res, next) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findByIdAndDelete(id);

    if (!booking) {
      res.status(400);
      throw new Error("There was a problem deleting booking");
    }

    return res.status(200).json({ id });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

// delete all bookings
const deleteAllBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.deleteMany({});

    if (!bookings) {
      res.status(400);
      throw new Error("there was a problem deleting booking");
    }

    return res.json({ success: true, message: "booings deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  deleteAllBookings,
};
