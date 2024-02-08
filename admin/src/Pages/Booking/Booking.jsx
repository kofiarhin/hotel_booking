import useFetch from "../../hooks/useFetch";
import "./booking.scss";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();

  const url = `/bookings/${id}`;

  const { data, error } = useFetch(url);

  const handleConfirm = () => {
    // Add your logic for confirming the booking
    alert(`Booking confirmed for ${data.name}`);
  };

  const handleDelete = () => {
    // Add your logic for deleting the booking
    alert(`Booking deleted for ${data.name}`);
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
              <button onClick={handleConfirm}>Confirm</button>
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
