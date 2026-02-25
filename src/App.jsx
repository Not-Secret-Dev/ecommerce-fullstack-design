import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/global/navbar/Navbar";
import Homepage from "./components/pages/homepage/Homepage";
import Listings from "./components/pages/listings/Listings";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import Footer from "./components/global/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
