const { Router } = require("express");
const { auth, verifyAdmin } = require("../middleware/authMiddleware");
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
router.get("/", auth, verifyAdmin, getBookings);

// get single booking
router.get("/:id", auth, verifyAdmin, getBooking);

// update booking
router.put("/:id", auth, verifyAdmin, updateBooking);

// create booking
router.post("/", createBooking);

// delete single booking
router.delete("/:id", auth, verifyAdmin, deleteBooking);

// delete all bookings
router.delete("/", auth, verifyAdmin, deleteAllBookings);

module.exports = router;
