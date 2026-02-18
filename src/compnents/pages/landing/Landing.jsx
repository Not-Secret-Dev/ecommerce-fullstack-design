import React from "react";
import Hero from "./Hero/Hero.jsx";
import Offers from "./Offers/Offers.jsx";
import HomeAndOutdoor from "./Home&Outdoor/Home&Outdoor.jsx";
import Gadgets from "./Gadgets/Gadgets.jsx";
import Inquiry from "./Inquiry/Inquiry.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import ExtraServices from "./ExtraServices/ExtraServices.jsx";
import SuppliersByRegion from "./SuppliersByRegion/SuppliersByRegion.jsx";


const Landing = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <HomeAndOutdoor />
      <Gadgets />
      <Inquiry />
      <Recommended />
      <ExtraServices />
      <SuppliersByRegion />
    </div>
  );
};

export default Landing;
