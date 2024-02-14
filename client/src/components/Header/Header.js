import "./header.scss";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Header;
