import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteRoom, reset } from "../features/Room/roomSlice";

const Room = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [room, setRoom] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { isSuccess } = useSelector((state) => state.room);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const getRoom = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/rooms/${id}`);
        if (res.ok) {
          const data = await res.json();
          setIsLoading(false);
          setRoom(data);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    if (isSuccess) {
      dispatch(reset());
    }

    getRoom();
  }, [isSuccess]);

  const handleDelete = async () => {
    dispatch(deleteRoom(id));
  };

  if (isLoading) {
    return (
      <div>
        <h1 className="heading">Loading...</h1>
      </div>
    );
  }

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
