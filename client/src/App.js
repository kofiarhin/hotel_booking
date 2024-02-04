import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

const App = () => {
  useEffect(() => {
    const getRooms = async () => {
      const res = await fetch("/rooms");
      if (res.ok) {
        const data = await res.json();

        console.log(data);
      }
    };

    getRooms();
  }, []);
  return (
    <div>
      <div className="container">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
