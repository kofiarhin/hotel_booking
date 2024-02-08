import { useEffect } from "react";
import { getRooms, reset } from "../features/Room/roomSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Rooms = () => {
  const dispatch = useDispatch();
  const { isSuccess, rooms } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  useEffect(() => {
    dispatch(reset());
  }, [isSuccess]);

  return (
    <div id="rooms">
      <h1 className="heading">Rooms</h1>

      <div className="room-container">
        {rooms.length > 0 ? (
          <div className="room-wrapper">
            {" "}
            {rooms.map((room) => {
              return (
                <Link
                  to={`/rooms/${room._id}`}
                  className="room-unit"
                  key={room._id}
                >
                  <img src={room.img[0]} alt="" />
                  <h1 className="heading"> {room.name} </h1>{" "}
                </Link>
              );
            })}{" "}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Rooms;
