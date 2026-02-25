import React from "react";
import Hero from "./Hero";
import Curated from "./curated";
import Philosophy from "./Philosophy";
import Newsletter from "./Newsletter";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Curated />
      <Philosophy />
      <Newsletter />
    </>
  );
};

export default Homepage;
