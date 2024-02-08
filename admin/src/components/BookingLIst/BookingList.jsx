import "./bookingList.scss";
import { Link } from "react-router-dom";

const BookingList = ({ data }) => {
  console.log(data);
  return (
    <div id="booking-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Type</th>
            <th>Check-in</th>
            <th>Checkout</th>
            <th>Confirmed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td> {item.name} </td>
              <td> {item.email} </td>
              <td> {item.roomId.name} </td>
              <td> {item.checkIn} </td>
              <td> {item.checkOut} </td>
              <td> {item.confirmed ? "Yes" : "No"} </td>
              <td>
                {" "}
                <Link to={`/bookings/${item._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
