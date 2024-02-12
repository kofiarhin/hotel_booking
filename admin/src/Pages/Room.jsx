import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteRoom, reset } from "../features/Room/roomSlice";

const Room = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const { id } = useParams();
  const { isSuccess } = useSelector((state) => state.room);
  const { user } = useSelector((state) => state.auth);
  useSelector(() => {
    if (isSuccess) {
      navigate("/rooms");
      dispatch(reset());
    }
  }, [isSuccess]);

  useEffect(() => {
    const getRoom = async () => {
      const res = await fetch(`/api/rooms/${id}`);
      if (res.ok) {
        const data = await res.json();
        setRoom(data);
      }
    };

    getRoom();
  }, []);

  const handleDelete = async () => {
    dispatch(deleteRoom(id));
  };

  return (
    <div>
      {room ? (
        <div id="room">
          <div className="img-wrapper">
            <img src={room.img[0]} />
          </div>
          <h1 className="heading"> {room.name} </h1>
          <div className="text-wrapper">
            <p> {room.desc} </p>
          </div>
          {user && (
            <>
              <div className="button-wrapper">
                <button onClick={handleDelete}> Delete Room </button>
                <Link to={`/rooms/edit/${room._id}`}> Edit Room </Link>
              </div>
            </>
          )}
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

export default Room;
