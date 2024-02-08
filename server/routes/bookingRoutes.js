const { Router } = require("express");
const {
  getBookings,
  createBooking,
  getBooking,
  updateBooking,
  deleteBooking,
  deleteAllBookings,
} = require("../controllers/bookingController");

const router = Router();

// get bookings
router.get("/", getBookings);

// get single booking
router.get("/:id", getBooking);

// update booking
router.put("/:id", updateBooking);

// create booking
router.post("/", createBooking);

// delete single booking
router.delete("/:id", deleteBooking);

// delete all bookings
router.delete("/", deleteAllBookings);

module.exports = router;
