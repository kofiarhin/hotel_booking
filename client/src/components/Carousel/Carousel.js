import "./carousel.scss";
import { useEffect, useState } from "react";

const Carousel = ({ data, title, height }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const cStyles = {
  //   height: height ? height + "vh" : "60vh",
  // };

  useEffect(() => {
    console.log(data.length);
    const interval = setInterval(() => {
      setCurrentIndex((prevState) => {
        if (prevState == data.length - 1) {
          return (prevState = 0);
        } else {
          return prevState + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="carousel">
      <img src={data[currentIndex]} />
    </div>
    // <div id="carousel">
    //   {title && <h1 className="heading"> {title} </h1>}
    //   <div className="img-wrapper">
    //     <img src={data[currentIndex]} alt="" />
    //   </div>
    // </div>
  );
};

export default Carousel;
