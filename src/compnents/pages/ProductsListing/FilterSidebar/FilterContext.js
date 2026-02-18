// FilterContext.js - without JSX
import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [checkedItems, setCheckedItems] = useState({
    Brands: ["Samsung", "Apple", "Pocco"],
    Features: ["Metallic"],
    Category: [],
    "Price range": [],
    Condition: [],
    Ratings: [],
    Manufacturer: [],
  });

  const handleCheckboxChange = (category, item) => {
    setCheckedItems((prev) => {
      const categoryItems = prev[category] || [];
      const isChecked = categoryItems.includes(item);

      return {
        ...prev,
        [category]: isChecked
          ? categoryItems.filter((i) => i !== item)
          : [...categoryItems, item],
      };
    });
  };

  const contextValue = {
    checkedItems,
    handleCheckboxChange,
  };

  return React.createElement(
    FilterContext.Provider,
    { value: contextValue },
    children,
  );
};
