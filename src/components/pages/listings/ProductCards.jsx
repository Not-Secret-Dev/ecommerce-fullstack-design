import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Products from "./Product";

const Container = styled.div`
  flex: 1;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 16px 0;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
`;

const SortSelect = styled.select`
  border: none;
  font-family: inherit;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.7rem; /* Smaller for elegance */
  cursor: pointer;
  outline: none;
  background: transparent;
  &:hover {
    color: #6ada1b;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  padding: 20px 0;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 100px 20px;
  h3 {
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

const ProductCards = ({
  filters = { categories: [], priceMin: 0, priceMax: 1000 },
  sortBy = "featured",
  viewMode = "grid",
  onSortChange,
  onViewModeToggle,
}) => {
  const filteredProducts = useMemo(() => {
    return Products.filter((product) => {
      if (filters.categories?.length > 0) {
        if (!filters.categories.includes(product.category)) return false;
      }
      if (
        product.price < filters.priceMin ||
        product.price > filters.priceMax
      ) {
        return false;
      }
      return true;
    });
  }, [filters]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];
    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => a.price - b.price);
      case "price-high":
        return products.sort((a, b) => b.price - a.price);
      case "name-asc":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  return (
    <Container>
      <Toolbar>
        <div
          style={{
            fontSize: "0.7rem",
            opacity: 0.6,
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          {sortedProducts.length} ITEMS
        </div>
        <SortSelect value={sortBy} onChange={onSortChange}>
          <option value="featured">Sort: Featured</option>
          <option value="price-low">Low to High</option>
          <option value="price-high">High to Low</option>
          <option value="name-asc">A - Z</option>
        </SortSelect>
      </Toolbar>

      {sortedProducts.length > 0 ? (
        <Grid $viewMode={viewMode}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
              small /* Pass a prop to make the card interior smaller */
            />
          ))}
        </Grid>
      ) : (
        <EmptyState>
          <h3>Nothing matches your selection.</h3>
          <button
            style={{
              background: "none",
              border: "none",
              borderBottom: "1px solid #000",
              cursor: "pointer",
              marginTop: "10px",
            }}
            onClick={() => window.location.reload()}
          >
            RESET
          </button>
        </EmptyState>
      )}
    </Container>
  );
};

export default ProductCards;
