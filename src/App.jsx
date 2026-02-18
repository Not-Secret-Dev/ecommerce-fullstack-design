import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./compnents/global/navbar/Navbar.jsx";
import Footer from "./compnents/global/footer/Footer.jsx";
import Newsletter from "./compnents/global/Newsletter/Newsletter.jsx";
import Landing from "./compnents/pages/landing/Landing.jsx";
import ProductsListing from "./compnents/pages/ProductsListing/ProductsListing.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/:slug" element={<ProductsListing />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
