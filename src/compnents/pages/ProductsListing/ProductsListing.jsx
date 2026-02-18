import React from "react";
import styled from "styled-components";
import Breadcrumb from "./Breadcrumbs/Breadcrumbs";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ProductGrid from "./ProductGrid/ProductGrid";
import { FilterProvider } from "./FilterSidebar/FilterContext";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1176px;
  margin: auto;

  #container {
    display: flex;
    justify-content: center;
    padding: 0 10px;

    @media (max-width: 768px) {
      flex-direction: column;
      padding: 0;
    }
  }
`;

const ProductsListing = () => {
  return (
    <FilterProvider>
      <MainContainer>
        <div className="desktop-only">
          <Breadcrumb />
        </div>
        <div id="container">
          <FilterSidebar />
          <ProductGrid />
        </div>
      </MainContainer>
    </FilterProvider>
  );
};

export default ProductsListing;
