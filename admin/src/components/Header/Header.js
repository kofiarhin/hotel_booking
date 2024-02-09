import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>LaVila</h1>
      </Link>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/rooms">Rooms</Link>
        <Link to="/rooms/create"> Create </Link>
        <Link to="/bookings"> Bookings </Link>
        {/* <Link to="/login"> Login </Link>
        <Link to="/register"> Register </Link> */}
      </nav>
    </header>
  );
};

export default Header;