import useFetch from "../../hooks/useFetch";
import "./booking.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteBooking,
  reset,
  updateBooking,
} from "../../features/booking/bookingSlice";

const Booking = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const { isSuccess, isError, message } = useSelector((state) => state.booking);
  const url = `/bookings/${id}`;

  const { data, error } = useFetch(url);

  // check if delete is succcessful
  useEffect(() => {
    if (isSuccess) {
      navigate("/bookings");
      dispatch(reset());
    }
  }, [isSuccess, dispatch, navigate]);

  const handleConfirm = () => {
    // Add your logic for confirming the booking

    const dataToSubmit = {
      bookingId: id,
      confirmed: true,
    };

    console.log("confirm");

    dispatch(updateBooking(dataToSubmit));
  };

  const handleDelete = () => {
    // Add your logic for deleting the booking
    dispatch(deleteBooking(id));
  };

  return (
    <div>
      {data ? (
        <div className="booking">
          <div className="entry">
            <div>
              <strong>Name:</strong> {data.name}
            </div>
            <div>
              <strong>Check-in:</strong> {data.checkIn}
            </div>
            <div>
              <strong>Checkout:</strong> {data.checkOut}
            </div>
            <div>
              <strong>Type:</strong> {data.roomId.name}
            </div>
            <div className="buttons">
              {data.confirmed ? null : (
                <button onClick={handleConfirm}>Confirm</button>
              )}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="heading"> Booking not found </h1>
      )}
    </div>
  );
};

export default Booking;
