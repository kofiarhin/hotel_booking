import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createRoom, reset } from "../features/Room/roomSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../utils/helper";

const CreateRoom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, isError, isLoading, message } = useSelector(
    (state) => state.room
  );

  const { user } = useSelector((state) => state.auth);

  const [files, setFiles] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    desc: "",
    price: "",
    rooms: "",
  });

  const { name, desc, price, rooms } = formData;

    useEffect(() => {
      if (!user) {
        navigate("/login");
      }
      dispatch(reset());
    }, [user]);

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

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let list = [];
      list = await Promise.all(
        Object.values(files).map(async (file) => {
          const url = await uploadImage(file);
          return url;
        })
      );

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
        desc,
        roomNumbers: formatRooms,
        img: list,
      };

      dispatch(createRoom(dataToSubmit));
      setFiles("");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (isLoading) {
    return (
      <div>
        <h1 className="heading">Loading...</h1>
      </div>
    );
  }
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
            <label htmlFor="description">Description</label>
            <textarea
              name="desc"
              value={desc}
              placeholder="Enter Description"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="">Upload images</label>
            <input
              type="file"
              name="file"
              multiple
              onChange={handleFileChange}
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
