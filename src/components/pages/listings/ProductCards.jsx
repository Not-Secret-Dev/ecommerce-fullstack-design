import React, { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Products from "./Product";

const media = {
  mobile: "@media (max-width: 768px)",
  tablet: "@media (max-width: 1024px)",
  smallMobile: "@media (max-width: 480px)",
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ControlsBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  flex-wrap: wrap;
  gap: 12px;
`;

const ResultsCount = styled.div`
  font-size: 14px;
  color: #666;

  strong {
    color: #1a1a1a;
    font-weight: 600;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`;

// Updated Sort Select with new style
const SortSelect = styled.select`
  padding: 8px 0;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  border-radius: 0;
  font-size: 14px;
  color: #1a1a1a;
  background: transparent;
  cursor: pointer;
  outline: none;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    border-bottom-color: #6ada1b;
  }

  &:focus {
    border-bottom-color: #6ada1b;
  }

  option {
    background: white;
    color: #1a1a1a;
  }
`;

// Updated View Toggle with new style
const ViewToggle = styled.div`
  display: flex;
  gap: 16px;
  border: none;
  padding: 0;
`;

const ViewButton = styled.button`
  padding: 8px 0;
  background: transparent;
  color: ${(props) => (props.$active ? "#6ADA1B" : "#666")};
  border: none;
  border-bottom: 2px solid
    ${(props) => (props.$active ? "#6ADA1B" : "transparent")};
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background: #6ada1b;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    color: #6ada1b;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;

  /* Grid view */
  ${(props) =>
    props.$viewMode === "grid" &&
    `
    @media (min-width: 1200px) {
      & > * {
        width: calc(20% - 16px);
      }
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      & > * {
        width: calc(25% - 15px);
      }
    }
    @media (min-width: 768px) and (max-width: 991px) {
      & > * {
        width: calc(33.333% - 14px);
      }
    }
    @media (min-width: 480px) and (max-width: 767px) {
      gap: 15px;
      & > * {
        width: calc(50% - 8px);
      }
    }
    @media (max-width: 479px) {
      gap: 15px;
      & > * {
        width: 100%;
      }
    }
  `}

  /* List view */
  ${(props) =>
    props.$viewMode === "list" &&
    `
    flex-direction: column;
    & > * {
      width: 95%;
    }
  `}
`;

// Updated Empty State button
const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  width: 100%;

  h3 {
    font-size: 18px;
    color: #1a1a1a;
    margin-bottom: 8px;
  }

  p {
    color: #666;
    margin-bottom: 24px;
  }

  button {
    background: transparent;
    color: #1a1a1a;
    border: none;
    border-bottom: 2px solid #6ada1b;
    border-radius: 0;
    padding: 10px 0;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background: #6ada1b;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }

    &:hover {
      color: #6ada1b;
    }
  }
`;

const ProductCards = ({
  filters = {
    categories: [],
    priceMin: 0,
    priceMax: 1000,
    rating: [],
    availability: [],
  },
  sortBy = "featured",
  viewMode = "grid",
  onSortChange,
  onViewModeToggle,
}) => {
  // Filter products based on filters
  const filteredProducts = useMemo(() => {
    return Products.filter((product) => {
      // Category filter
      if (filters.categories?.length > 0) {
        const productCategory = product.title.includes("Headphones")
          ? "Electronics"
          : product.title.includes("Watch")
            ? "Electronics"
            : product.title.includes("Backpack")
              ? "Clothing"
              : product.title.includes("Shoes")
                ? "Clothing"
                : product.title.includes("Coffee")
                  ? "Home & Garden"
                  : product.title.includes("Yoga")
                    ? "Sports"
                    : product.title.includes("Lamp")
                      ? "Home & Garden"
                      : product.title.includes("Water")
                        ? "Sports"
                        : "Books";

        if (!filters.categories.includes(productCategory)) {
          return false;
        }
      }

      // Price filter
      if (
        product.price < filters.priceMin ||
        product.price > filters.priceMax
      ) {
        return false;
      }

      // Rating filter - mock implementation
      if (filters.rating?.length > 0) {
        const mockRating = Math.floor(Math.random() * 5) + 1;
        const highestRating = Math.max(...filters.rating.map(Number));
        if (mockRating < highestRating) {
          return false;
        }
      }

      // Availability filter - mock
      if (filters.availability?.length > 0) {
        if (filters.availability.includes("In Stock") && Math.random() > 0.8) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    switch (sortBy) {
      case "price-low":
        return products.sort((a, b) => a.price - b.price);
      case "price-high":
        return products.sort((a, b) => b.price - a.price);
      case "name-asc":
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return products.sort((a, b) => b.title.localeCompare(a.title));
      default:
        return products;
    }
  }, [filteredProducts, sortBy]);

  const handleClearFilters = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <Container>
      <ControlsBar>
        <ResultsCount>
          <strong>{sortedProducts.length}</strong> products found
        </ResultsCount>
        <Controls>
          <SortSelect value={sortBy} onChange={onSortChange}>
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </SortSelect>
          <ViewToggle>
            <ViewButton
              $active={viewMode === "grid"}
              onClick={onViewModeToggle}
            >
              Grid
            </ViewButton>
            <ViewButton
              $active={viewMode === "list"}
              onClick={onViewModeToggle}
            >
              List
            </ViewButton>
          </ViewToggle>
        </Controls>
      </ControlsBar>

      {sortedProducts.length > 0 ? (
        <MainContainer $viewMode={viewMode}>
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              viewMode={viewMode}
            />
          ))}
        </MainContainer>
      ) : (
        <EmptyState>
          <h3>No products found</h3>
          <p>Try adjusting your filters to find what you're looking for.</p>
          <button onClick={handleClearFilters}>Clear All Filters</button>
        </EmptyState>
      )}
    </Container>
  );
};

export default ProductCards;
