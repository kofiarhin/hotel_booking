import "./room.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import { Link } from "react-router-dom";

const Room = () => {
  const [room, setRoom] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getRoom = async (id) => {
      const res = await fetch(`/api/rooms/${id}`);

      if (res.ok) {
        const data = await res.json();
        setRoom(data);
      }
    };

    getRoom(id);
  }, []);
  return (
    <div id="room">
      {room && (
        <div className="room-img-wrapper">
          <Carousel data={room.img} title={room.name} />
        </div>
      )}
      {room && (
        <div className="container">
          <div className="room-wrapper">
            <div className="text-wrapper">
              <h1 className="heading"> {room.name} </h1>
              <p> {room.desc} </p>
            </div>

            <div className="cta-wrapper">
              <Link to={`/bookings/create/${id}`}>Book Now</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;
