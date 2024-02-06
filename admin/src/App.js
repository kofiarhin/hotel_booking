import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import CreateRoom from "./Pages/CreateRoom";
import Rooms from "./Pages/Rooms";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/rooms/create" element={<CreateRoom />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
