import "./home.styles.scss";
import Landing from "../../components/Landing/Landing";
import CtaContainer from "../../components/CtaContainer/CtaContainer";
const Home = () => {
  return (
    <div id="home">
      <Landing />

      <div className="container">
        <div className="text-wrapper">
          <h1 className="text-large center">
            WELCOME TO AN OASIS OF LUXURY IN THE HEART OF THE CITY
          </h1>
          <p className="text-medium center">
            Indulge in the epitome of refined luxury as you step into a
            sanctuary amidst the bustling energy of London. Our oasis beckons
            with an exquisite blend of sophistication and comfort, promising an
            unparalleled experience in the very heart of this dynamic city.
            Discover a realm where lavishness meets convenience, where every
            detail is curated to enhance your stay and elevate your senses.
            Welcome to a retreat of unparalleled elegance, right in the midst of
            the pulsating rhythm of London life.
          </p>
        </div>

        <CtaContainer />
      </div>
      {/* end container */}
    </div>
  );
};

export default Home;
