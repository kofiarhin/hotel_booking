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
  useSelector(() => {
    if (isSuccess) {
      navigate("/rooms");
      dispatch(reset());
    }
  }, [isSuccess]);

  useEffect(() => {
    const getRoom = async () => {
      const res = await fetch(`/rooms/${id}`);
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
        <div>
          <h1 className="heading"> {room.name} </h1>
          <button onClick={handleDelete}> Delete Room </button>
          <Link to={`/rooms/edit/${room._id}`}> Edit Room </Link>
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
