const Room = require("../models/roomModel");

const createRoom = async (req, res) => {
  const { name, price, desc, roomNumbers, img } = req.body;

  try {
    const room = await Room.create({
      name,
      price,
      desc,
      roomNumbers,
      img,
    });

    return res.json(room);
  } catch (error) {
    console.log(error.message);
    return res
      .status(400)
      .json({ message: "there was a problem creating room" });
  }
};

// get all room
const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    if (!rooms) {
      res.status(400);
      throw new Error("rooms not found");
    }

    return res.status(200).json(rooms);
  } catch (error) {}
};

// get single room
const getRoom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const room = await Room.findById(id);
    if (!room) {
      res.status(400);
      throw new Error("room not found");
    }

    return res.status(200).json(room);
  } catch (error) {
    next(error);
  }
};

// delete room
const deleteRoom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const room = await Room.findByIdAndDelete(id);

    if (!room) {
      res.status(400);
      throw new Error("room not found");
    }
    return res.status(200).json({ success: true, id });
  } catch (error) {
    next(error);
  }
};

const deleteRoomNumber = async (req, res, next) => {
  const { id, roomNumber } = req.params;

  try {
    const room = await Room.findByIdAndUpdate(
      id,
      {
        $pull: {
          roomNumbers: { number: roomNumber },
        },
      },
      {
        new: true,
      }
    );

    if (!room) {
      res.status(400);
      throw new Error("there was a problem deleting room");
    }

    return res.status(200).json(room);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const addRoomNumber = async (req, res) => {
  const { id } = req.params;
  try {
    const room = await Room.findByIdAndUpdate(id, {
      $addToSet: {
        roomNumbers: req.body,
      },
    });

    if (!room) {
      res.status(400);
      throw new Error("there was a problem updating room");
    }

    return res.status(201).json(room);
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req, res, next) => {
  const { id } = req.params;

  try {
    const room = await Room.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );

    if (!room) {
      res.status(400);
      throw new Error("there was a problem updading room");
    }

    const rooms = await Room.find();
    return res.status(201).json(rooms);
  } catch (error) {
    next(error);
  }
};

const updateAvailability = async (req, res, next) => {
  const id = req.params.id;

  const { unavailableDates } = req.body;

  try {
    const id = req.params.id;
    const room = await Room.updateOne(
      { "roomNumbers._id": id },
      {
        $addToSet: {
          "roomNumbers.$.unavailableDates": { $each: unavailableDates },
        },
      },
      {
        new: true,
      }
    );

    const newRoom = await Room.findOne({ "roomNumbers._id": id });

    console.log(newRoom);

    return res.json(newRoom);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
module.exports = {
  createRoom,
  getRooms,
  getRoom,
  deleteRoom,
  deleteRoomNumber,
  addRoomNumber,
  updateRoom,
  updateAvailability,
};
