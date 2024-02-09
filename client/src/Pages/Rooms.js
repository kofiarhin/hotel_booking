import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRooms } from "../features/Room/roomSlice";
import RoomList from "../components/RoomLIst/RoomList";

const Rooms = () => {
  const dispatch = useDispatch();

  const { rooms } = useSelector((state) => state.room);

  useEffect(() => {
    dispatch(getRooms());
  }, []);
  return (
    <div>
      <h1 className="heading">Rooms</h1>

      {rooms.length > 0 ? (
        <RoomList rooms={rooms} />
      ) : (
        <h1 className="heading">Rooms not found</h1>
      )}
    </div>
  );
};

export default Rooms;
