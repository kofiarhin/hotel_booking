import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createRoom, reset } from "../features/Room/roomSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, message } = useSelector((state) => state.room);
  const [formData, setFormData] = useState({
    name: "test name",
    description: "test description",
    price: 200,
    rooms: "400,200,150,233",
  });

  const { name, description, price, rooms } = formData;

  useEffect(() => {
    if (isSuccess) {
      navigate("/rooms");
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formatRooms = [];
    if (rooms.length > 0) {
      formatRooms = rooms.split(",").map((room) => ({
        number: parseInt(room),
        unavailableDates: [],
      }));
    }

    const dataToSubmit = {
      name,
      price,
      desc: description,
      roomNumbers: formatRooms,
    };

    dispatch(createRoom(dataToSubmit));
  };
  return (
    <div>
      <h1 className="heading">Create Room</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Description</label>
            <input
              type="text"
              name="description"
              value={description}
              placeholder="Enter Description"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              placeholder="Enter Price"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="name">Room Numbers</label>
            <textarea
              name="rooms"
              value={rooms}
              onChange={handleChange}
              placeholder="Enter room numbers"
            >
              {" "}
            </textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;
