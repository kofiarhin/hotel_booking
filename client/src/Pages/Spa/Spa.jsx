import "./spa.styles.scss";
import Carousel from "../../components/Carousel/Carousel";
const Spa = () => {
  const images = [
    "/images/spa/spa-1.jpg",
    "/images/spa/spa-2.jpg",
    "/images/spa/spa-3.jpg",
    "/images/spa/spa-4.jpg",
    "/images/spa/spa-5.jpg",
  ];
  return (
    <div id="spa">
      <div className="image-container">
        <Carousel data={images} />
      </div>

      <div className="container">
        <div className="text-wrapper">
          <p className="text-large center">SPA AT THE LANDMARK LONDON</p>

          <p className="text-medium center">
            Escape to a blissful place, nourish the body and mind in our sensual
            spa and health club. Swim or steam, exercise away the stress or
            indulge in exclusive body treatments. A sensuous Spa and wellness
            centre featuring an array of facilities and treatments for
            relaxation, exercise and pure enjoyment. A simply beautiful pool,
            private gym and sensuous treatment rooms, a secret hideaway to ease
            the city stress away
          </p>
        </div>
      </div>
    </div>
  );
};

export default Spa;
