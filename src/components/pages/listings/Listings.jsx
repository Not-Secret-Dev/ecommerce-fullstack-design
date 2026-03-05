import React, { useState, useCallback } from "react";
import styled from "styled-components";
import FiltersSidebar from "./sidebar";
import ProductCards from "./ProductCards";

const ListingsContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #ffffff;
  max-width: 1600px;
  margin: 0 auto;
`;

const Listings = () => {
  const [filters, setFilters] = useState({
    categories: [],
    priceMin: 0,
    priceMax: 1000,
    rating: [],
    availability: [],
  });
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");

  const handleFiltersApply = useCallback(
    (newFilters) => setFilters(newFilters),
    [],
  );
  const handleSortChange = useCallback((e) => setSortBy(e.target.value), []);
  const toggleViewMode = useCallback(
    () => setViewMode((p) => (p === "grid" ? "list" : "grid")),
    [],
  );

  return (
    <ListingsContainer>
      <FiltersSidebar onFiltersApply={handleFiltersApply} />
      <ProductCards
        filters={filters}
        sortBy={sortBy}
        viewMode={viewMode}
        onSortChange={handleSortChange}
        onViewModeToggle={toggleViewMode}
      />
    </ListingsContainer>
  );
};

export default Listings;
