import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

// Global Components
import Navbar from "./components/global/navbar/Navbar";
import Footer from "./components/global/footer/Footer";

// Pages
import Homepage from "./components/pages/homepage/Homepage";
import Listings from "./components/pages/listings/Listings";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'Inter', sans-serif;
    background-color: #ffffff;
    color: #111;
    overflow-x: hidden;
  }
`;

// Helper: Resets scroll position to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Main Entry Point */}
        <Route path="/" element={<Homepage />} />

        {/* Shopping Routes */}
        <Route path="/listings" element={<Listings />} />
        <Route path="/product/:id" element={<Product />} />

        {/* Checkout Flow */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Company Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 Catch-all (Optional) */}
        <Route
          path="*"
          element={
            <div style={{ padding: "100px", textAlign: "center" }}>
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
