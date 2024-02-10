import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="main-header">
      <Link to="/">
        <h1>LaVila</h1>
      </Link>
      <nav>
        <Link to="/rooms" className="cta">
          {" "}
          Book Now{" "}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
