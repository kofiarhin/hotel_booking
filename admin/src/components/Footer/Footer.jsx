// Footer.js

import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import "./footer.scss"; // Import your SCSS file for styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="social-icons">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
      <p>&copy; 2024 LaVila. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
