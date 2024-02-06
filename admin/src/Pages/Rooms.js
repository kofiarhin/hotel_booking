import { useEffect } from "react";
import { getRooms, reset } from "../features/Room/roomSlice";
import { useDispatch, useSelector } from "react-redux";

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
            return <h2 key={room._id}> {room.name} </h2>;
          })
        : null}
    </div>
  );
};

export default Rooms;
