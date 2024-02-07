import "./booking.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoom } from "../../utils/helper";
const Booking = () => {
  const { id } = useParams();

  const [room, setRoom] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const { name, email, checkIn, checkOut } = formData;

  useEffect(() => {
    const getRoomData = async () => {
      try {
        const data = await getRoom(id);
        setRoom(data);
      } catch (error) {}
    };

    getRoomData();
  }, []);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("create booking");
  };
  return (
    <div id="booking">
      {room ? (
        <div id="booking">
          <h1 className="heading"> {room.name} </h1>
          <div className="col-wrapper">
            <div className="col">
              <div className="img-wrapper">
                <img src={room.img[0]} alt="" />
              </div>
              <div className="text-wrapper">
                <p> {room.desc} </p>
                <h2> £{room.price.toFixed(2)} </h2>
              </div>
            </div>
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
      ) : (
        <div>
          {" "}
          <h1 className="heading">Room not found</h1>{" "}
        </div>
      )}
    </div>
  );
};

export default Booking;
