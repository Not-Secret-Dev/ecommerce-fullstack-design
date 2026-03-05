import React from "react";
import Hero from "./Hero";
import Curated from "./Curated";
import Philosophy from "./Philosophy";
import Newsletter from "./Newsletter";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    color: #1a1a1a;
    overflow-x: hidden;
  }
`;

const Homepage = () => (
  <>
    <GlobalStyle />
    <Hero />
    <Curated />
    <Philosophy />
    <Newsletter />
  </>
);

export default Homepage;
