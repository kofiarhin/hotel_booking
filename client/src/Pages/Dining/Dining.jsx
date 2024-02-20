import "./dining.styles.scss";
import Carousel from "../../components/Carousel/Carousel";
const Dining = () => {
  const images = [
    "/images/dining/dining-1.jpg",
    "/images/dining/dining-2.jpg",
    "/images/dining/dining-3.jpg",
    "/images/dining/dining-4.jpg",
  ];
  return (
    <div id="dining">
      <div className="image-container">
        <Carousel data={images} />
      </div>

      <div className="container">
        <div className="text-wrapper">
          <p className="text-large center"> BAR & RESTAURANT</p>

          <p className="text-medium center">
            Discover an array of charming and comfortable places to dine and
            unwind.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dining;
