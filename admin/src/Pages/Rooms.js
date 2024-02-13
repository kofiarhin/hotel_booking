import { useEffect } from "react";
import { getRooms, reset } from "../features/Room/roomSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Rooms = () => {
  const dispatch = useDispatch();
  const { isSuccess, rooms, isLoading } = useSelector((state) => state.room);

  // useEffect(() => {
  //   dispatch(getRooms());
  // }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(reset());
    }
  }, [isSuccess]);

  if (isLoading) {
    return (
      <div>
        <h1 className="heading">Loading.....</h1>
      </div>
    );
  }

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
        ) : (
          <h1 className="heading">There are no Rooms</h1>
        )}
      </div>
    </div>
  );
};

export default Rooms;
