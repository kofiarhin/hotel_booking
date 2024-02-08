import "./bookings.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBookings, reset } from "../../features/booking/bookingSlice";
import BookingList from "../../components/BookingLIst/BookingList";

const Bookings = () => {
  const dispatch = useDispatch();

  const { isSuccess, bookings } = useSelector((state) => state.booking);

  useEffect(() => {
    dispatch(getBookings());
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
