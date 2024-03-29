import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Header from "./components/Header/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Room from "./Pages/Room/Room";
import Rooms from "./Pages/Rooms";
import Footer from "./components/Footer/Footer";
import Bookings from "./Pages/Bookings/Bookings";
import Success from "./Pages/Success/Success";
import CreateBooking from "./Pages/CreateBooking/CreateBooking";
import Spa from "./Pages/Spa/Spa";
import Dining from "./Pages/Dining/Dining";

const App = () => {
  return (
    <div>
      <div className="">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/bookings/create/:id" element={<CreateBooking />} />
            <Route path="/spa" element={<Spa />} />
            <Route path="/dining" element={<Dining />} />

            <Route path="/success" element={<Success />} />
          </Routes>

          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
