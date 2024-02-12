import "./bookings.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getBookings, reset } from "../../features/booking/bookingSlice";
import BookingList from "../../components/BookingLIst/BookingList";

const Bookings = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, bookings } = useSelector((state) => state.booking);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getBookings());
    if (!user) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    dispatch(reset());
  }, [isSuccess]);
  return (
    <div>
      <h1 className="heading">Bookings</h1>

      {bookings.length > 0 && <BookingList data={bookings} />}
    </div>
  );
};

export default Bookings;
