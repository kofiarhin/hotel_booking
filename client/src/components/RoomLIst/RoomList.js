import "./roomList.scss";
import { Link } from "react-router-dom";
const RoomList = ({ rooms }) => {
  return (
    <div>
      <div className="rooms-wrapper">
        {rooms.map((room) => (
          <div key={room._id} className="room-unit">
            <div className="img-wrapper">
              <img src={room.img[0]} alt="" />
            </div>
            <Link to={`/rooms/${room._id}`}>
              <h1> {room.name} </h1>
            </Link>
            <div className="button-wrapper">
              <Link to={`/bookings/create/${room._id}`}> Book Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
