// src/Pages/Rooms.jsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRooms, reset } from "../features/Room/roomSlice";

const Rooms = () => {
  const dispatch = useDispatch();
  const {
    rooms = [],
    isLoading,
    isSuccess,
    error,
  } = useSelector((s) => s.room);

  // fetch on mount
  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  // clear flags after success
  useEffect(() => {
    if (isSuccess) dispatch(reset());
  }, [isSuccess, dispatch]);

  if (isLoading) {
    return (
      <div className="container">
        <h1 className="heading">Loading…</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div id="rooms" className="container">
      <h1 className="heading">Rooms</h1>
      <p className="hint">Browse available rooms</p>

      <div className="room-container">
        {rooms?.length ? (
          <div className="room-wrapper">
            {rooms.map((room) => {
              const imgSrc = Array.isArray(room.img) ? room.img[0] : room.img;
              return (
                <Link
                  to={`/rooms/${room._id}`}
                  className="room-unit"
                  key={room._id}
                >
                  {imgSrc ? (
                    <img src={imgSrc} alt={room.name} />
                  ) : (
                    <div className="img-fallback" />
                  )}
                  <h2 className="heading">{room.name}</h2>
                </Link>
              );
            })}
          </div>
        ) : (
          <p className="hint">There are no rooms</p>
        )}
      </div>
    </div>
  );
};

export default Rooms;
