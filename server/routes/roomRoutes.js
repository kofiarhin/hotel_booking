const { Router } = require("express");
const {
  createRoom,
  getRooms,
  deleteRoom,
  deleteRoomNumber,
  addRoomNumber,
  updateRoom,
  getRoom,
  updateUnavailable,
  updateAvailability,
} = require("../controllers/roomController");

const router = Router();

// create room
router.post("/", createRoom);

// get all rooms
router.get("/", getRooms);

// get room
router.get("/:id", getRoom);

// delete room
router.delete("/:id", deleteRoom);

// delete room number
router.delete("/:id/:roomNumber", deleteRoomNumber);

// update room
router.put("/:id", updateRoom);

// update room numbers
router.put("/add/:id", addRoomNumber);

// updaste unavailable dates
router.put("/availability/:id", updateAvailability);

module.exports = router;
