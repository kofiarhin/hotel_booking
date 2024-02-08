import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getRooms, reset } from "./features/Room/roomSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreateRoom from "./Pages/CreateRoom";
import Rooms from "./Pages/Rooms";
import Room from "./Pages/Room";
import EditRoom from "./Pages/EditRoom";
import Bookings from "./Pages/Bookings/Bookings";
import Booking from "./Pages/Booking/Booking";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/:id" element={<Room />} />
          <Route path="/rooms/create" element={<CreateRoom />} />
          <Route path="/rooms/edit/:id" element={<EditRoom />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/:id" element={<Booking />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
