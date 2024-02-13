import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateRoom, reset } from "../features/Room/roomSlice";
const EditRoom = () => {
  const { isSuccess } = useSelector((state) => state.room);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
  });

  const { name, price, desc, roomNumbers } = formData;

  useEffect(() => {
    const getRoom = async () => {
      const res = await fetch(`/api/rooms/${id}`);

      if (res.ok) {
        const data = await res.json();

        // convert room numbers to string
        const { roomNumbers, ...rest } = data;
        const listMap = roomNumbers.map((room) => room.number);

        const listString = listMap.join(", ");

        setFormData({
          ...rest,
          roomNumbers: listString,
        });
      }
    };
    getRoom();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate(`/rooms/${id}`);
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // convert rrom numbers to array
    let arrString = [];

    const roomMap = roomNumbers.split(",").map((item) => ({
      number: item,
      unavailableDates: [],
    }));

    const dataToSubmit = {
      ...formData,
      roomNumbers: roomMap,
      roomId: id,
    };

    dispatch(updateRoom(dataToSubmit));
  };
  return (
    <div>
      {formData ? (
        <div>
          <h1 className="heading"> {formData?.name} </h1>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name"> Name </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="name"> Price </label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="desc"> Description </label>
                <textarea
                  type="text"
                  name="desc"
                  value={desc}
                  onChange={handleChange}
                />
              </div>

              <div className="input-group">
                <label htmlFor="desc"> Room Numbers </label>
                <textarea
                  type="text"
                  name="roomNumbers"
                  value={roomNumbers}
                  onChange={handleChange}
                />
              </div>

              <button>Save Changes</button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EditRoom;
