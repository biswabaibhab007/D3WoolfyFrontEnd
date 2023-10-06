// import './App.css'
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SignUp from "./SignUp";
import Shop from "./Shop";
import Cart from "./Cart";
import Login from "./Login";
import PrivateComponents from "./PrivateComponents";
import Farmerdashboard from "./dashboard/farmerdashboard";
import Processordashboard from "./dashboard/ProcessorDashboard";
import Buyerdashboard from "./dashboard/BuyerDashboard.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const auth = JSON.parse(localStorage.getItem("user"));
  const category = auth ? auth.category : "";

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
              <Route path="/home" element={<Processordashboard />} />
              <Route element={<PrivateComponents />}>
                <Route
                  path="/"
                  element={
                    category === "farmer" ? (
                      <Farmerdashboard />
                    ) : category === "processor" ? (
                      <Processordashboard />
                    ) : category === "buyer" ? (
                      <Buyerdashboard />
                    ) : (
                      <Home/>
                    )
                  }
                />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/logout" element={<SignUp />} />
                <Route path="/farmerdashboard" element={<Farmerdashboard />} />
                <Route
                  path="/Processordashboard"
                  element={<Processordashboard />}
                />
                <Route
                  path="/buyerdashboard" element={<Buyerdashboard />}
                />
              </Route>
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
