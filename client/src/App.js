import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Room from "./Pages/Room/Room";
import Rooms from "./Pages/Rooms";
import Booking from "./Pages/Booking/Booking";
import Footer from "./components/Footer/Footer";
import Bookings from "./Pages/Bookings/Bookings";

const App = () => {
  return (
    <div>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/bookings/create/:id" element={<Booking />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
