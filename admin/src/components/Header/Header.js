import "./header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser, reset } from "../../features/auth/authSlice";
const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };
  return (
    <header className="main-header">
      <Link to="/">
        <h1>LaVila</h1>
      </Link>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/rooms">Rooms</Link>
        {user ? (
          <>
            <Link to="/rooms/create"> Create </Link>
            <Link to="/bookings"> Bookings </Link>
            <button className="cta" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
