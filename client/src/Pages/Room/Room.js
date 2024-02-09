import "./room.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

const Room = () => {
  const [room, setRoom] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const getRoom = async (id) => {
      const res = await fetch(`/rooms/${id}`);

      if (res.ok) {
        const data = await res.json();
        setRoom(data);
      }
    };

    getRoom(id);
  }, []);
  return (
    <div id="room">
      {room && <Carousel data={room.img} title={room.name} />}
      {room && (
        <div className="room-wrapper">
          <div className="text-wrapper">
            <p> {room.desc} </p>
          </div>

          <div className="cta-wrapper">
            <a href={`/bookings/${id}`}>Book Now</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Room;