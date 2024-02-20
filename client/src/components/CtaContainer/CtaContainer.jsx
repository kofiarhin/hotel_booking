import { Link } from "react-router-dom";
import "./ctaContainer.styles.scss";
const CtaContainer = () => {
  return (
    <div id="cta-container">
      <Link className="cta" to="/spa">
        Spa at Lavilla
      </Link>
      <img src="/images/spa.jpg" alt="" />
    </div>
  );
};

export default CtaContainer;
