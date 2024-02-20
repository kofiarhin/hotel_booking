import "./createBooking.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBooking, reset } from "../../features/Booking/bookingSlice";
import { getRoom } from "../../utils/helper";
import Carousel from "../../components/Carousel/Carousel";

const CreateBooking = () => {
  const { id: roomId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess } = useSelector((state) => state.booking);

  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    checkIn: "",
    checkOut: "",
  });

  const { name, email, checkIn, checkOut } = formData;

  useEffect(() => {
    const getRoomData = async () => {
      try {
        const data = await getRoom(roomId);
        setRoom(data);
      } catch (error) {}
    };

    getRoomData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      navigate("/success");
      dispatch(reset());
    }
  }, [isSuccess]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      roomId,
      name,
      email,
      checkIn,
      checkOut,
    };

    dispatch(createBooking(dataToSubmit));
  };

  console.log(isSuccess);
  return (
    <div id="booking">
      {room ? (
        <div id="booking">
          {/* carousel */}

          <div className="booking-img-wrapper">
            <Carousel data={room.img} title={room.name} />
          </div>

          <div className="col-wrapper">
            <div className="col container">
              <div className="text-wrapper">
                <p className="text-medium"> {room.desc} </p>
                <h2> £{room.price.toFixed(2)} </h2>
              </div>
            </div>
            <div className="container">
              <div className="form-wrapper">
                <h1 className="heading">Book Now</h1>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="Email">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="checkIn">Check In</label>
                    <input
                      type="date"
                      name="checkIn"
                      value={checkIn}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="checkOut">Check Out</label>
                    <input
                      type="date"
                      name="checkOut"
                      value={checkOut}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="input-group">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="heading">Room not found</h1>{" "}
        </div>
      )}
    </div>
  );
};

export default CreateBooking;
