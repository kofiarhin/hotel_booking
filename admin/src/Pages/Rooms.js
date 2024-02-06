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
    <div>
      <h1 className="heading">Rooms</h1>
      {rooms.length > 0
        ? rooms.map((room) => {
            return (
              <Link to={`/rooms/${room._id}`} key={room._id}>
                <h1> {room.name} </h1>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Rooms;
