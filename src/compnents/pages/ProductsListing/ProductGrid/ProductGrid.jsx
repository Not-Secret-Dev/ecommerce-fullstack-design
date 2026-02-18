// ProductGrid.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { useFilterContext } from "../FilterSidebar/FilterContext";
import ProductCard from "./ProductCard/ProductCard";
import { CardData } from "./ProductCard/Data";

const MainContainer = styled.div`
  width: 926px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`;

const NavbarContainer = styled.nav`
  width: 926px;
  height: 62px;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin-left: 16px;
  }

  span {
    font-weight: 600;
  }
`;

const VerifiedCheckbox = styled.div`
  width: 144px;
  height: 36px;
  padding: 6px 16px 6px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  input {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  label {
    font-size: 14px;
  }
`;

const SelectBox = styled.select`
  width: 144px;
  height: 36px;
  padding: 8px 12px;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  font-size: 14px;
`;

const FiltersApplied = styled.div`
  width: 728px;
  min-height: 32px;
  border: 1px solid #dee2e7;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  padding: 8px;
  margin-top: 8px;
  box-sizing: border-box;
`;

const FilterTag = styled.span`
  display: inline-flex;
  align-items: center;
  height: 28px;
  max-width: 200px;
  border: 1px solid #0d6efd;
  border-radius: 4px;
  padding: 0 4px 0 8px;
  gap: 4px;
  font-size: 13px;
  color: #0d6efd;
  background-color: #f0f7ff;
  box-sizing: border-box;

  .filter-text {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: #0d6efd;
    padding: 0 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    flex-shrink: 0;

    &:hover {
      background-color: rgba(13, 110, 253, 0.1);
      color: #dc3545;
    }
  }
`;

const ProductCards = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
`;

const NoProductsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px;
  color: #6c757d;
  font-size: 16px;
  background: #f8f9fa;
  border-radius: 8px;
`;

const ProductGrid = () => {
  const { checkedItems, handleCheckboxChange } = useFilterContext();
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  // Get all applied filters
  const getAppliedFilters = () => {
    const filters = [];
    if (!checkedItems) return filters;

    Object.entries(checkedItems).forEach(([category, items]) => {
      if (Array.isArray(items) && items.length > 0) {
        items.forEach((item) => {
          filters.push({ category, item });
        });
      }
    });
    return filters;
  };

  // Filter products based on selected filters
  const getFilteredProducts = () => {
    let filteredProducts = [...CardData];

    // Apply category filters if any
    if (checkedItems) {
      // Filter by brand
      if (checkedItems.Brand?.length > 0) {
        filteredProducts = filteredProducts.filter((product) =>
          checkedItems.Brand.includes(product.brand),
        );
      }

      // Filter by price range
      if (checkedItems["Price range"]?.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          const price = parseFloat(product.currentPrice.replace("$", ""));
          return checkedItems["Price range"].some((range) => {
            if (range === "Under $25") return price < 25;
            if (range === "$25 - $50") return price >= 25 && price <= 50;
            if (range === "$50 - $100") return price >= 50 && price <= 100;
            if (range === "$100 - $200") return price >= 100 && price <= 200;
            if (range === "$200 & Above") return price > 200;
            return true;
          });
        });
      }

      // Filter by ratings
      if (checkedItems["Ratings"]?.length > 0) {
        filteredProducts = filteredProducts.filter((product) => {
          return checkedItems["Ratings"].some((rating) => {
            const ratingValue = parseInt(rating);
            return product.rating >= ratingValue;
          });
        });
      }

      // Filter by verified only
      if (verifiedOnly) {
        filteredProducts = filteredProducts.filter(
          (product) => product.verified === true,
        );
      }
    }

    // Apply sorting
    switch (sortBy) {
      case "priceLowToHigh":
        filteredProducts.sort(
          (a, b) =>
            parseFloat(a.currentPrice.replace("$", "")) -
            parseFloat(b.currentPrice.replace("$", "")),
        );
        break;
      case "priceHighToLow":
        filteredProducts.sort(
          (a, b) =>
            parseFloat(b.currentPrice.replace("$", "")) -
            parseFloat(a.currentPrice.replace("$", "")),
        );
        break;
      case "newestFirst":
        filteredProducts.sort((a, b) => b.id - a.id);
        break;
      default:
        // relevance - keep original order
        break;
    }

    return filteredProducts;
  };

  const handleRemoveFilter = (categoryToRemove, itemToRemove) => {
    handleCheckboxChange(categoryToRemove, itemToRemove);
  };

  const appliedFilters = getAppliedFilters();
  const filteredProducts = getFilteredProducts();
  const mainCategory = checkedItems?.Category?.[0] || "Mobile accessory";

  return (
    <MainContainer>
      <NavbarContainer>
        <p>
          {filteredProducts.length} items in <span>{mainCategory}</span>
        </p>
        <div
          style={{ display: "flex", alignItems: "center", marginRight: "18px" }}
        >
          <VerifiedCheckbox>
            <input
              type="checkbox"
              id="verified"
              checked={verifiedOnly}
              onChange={(e) => setVerifiedOnly(e.target.checked)}
            />
            <label htmlFor="verified">Verified only</label>
          </VerifiedCheckbox>
          <SelectBox value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="newestFirst">Newest First</option>
          </SelectBox>
        </div>
      </NavbarContainer>

      {appliedFilters.length > 0 && (
        <FiltersApplied>
          {appliedFilters.map(({ category, item }) => (
            <FilterTag key={`${category}-${item}`}>
              <span className="filter-text">{item}</span>
              <button onClick={() => handleRemoveFilter(category, item)}>
                ×
              </button>
            </FilterTag>
          ))}
        </FiltersApplied>
      )}

      <ProductCards>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <NoProductsMessage>
            No products match the selected filters
          </NoProductsMessage>
        )}
      </ProductCards>
    </MainContainer>
  );
};

export default ProductGrid;
