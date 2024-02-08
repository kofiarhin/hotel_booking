import Carousel from "../Carousel/Carousel";
import "./landing.scss";
const Landing = () => {
  const images = [
    "images/landing-1.jpeg",
    "images/landing-2.jpeg",
    "images/landing-3.jpeg",
  ];
  return (
    <div id="landing">
      <div className="img-wrapper">
        {/* <img src="images/landing.jpeg" alt="" /> */}
        <Carousel data={images} height={80} />
      </div>
    </div>
  );
};

export default Landing;
