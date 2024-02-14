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
      <Carousel data={images} />
    </div>
  );
};

export default Landing;
