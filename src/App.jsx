import React from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./App.css";
import Products from "./Pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
