import React, { useState, useEffect, useCallback, useMemo } from "react";
import styled from "styled-components";
import { ChevronDown, X, Filter, Sliders } from "lucide-react";

// Add media query constants
const media = {
  mobile: "@media (max-width: 768px)",
  tablet: "@media (max-width: 1024px)",
  smallMobile: "@media (max-width: 480px)",
};

// Styled Components with improved organization
const SidebarContainer = styled.aside`
  width: 280px;
  height: 100vh;
  background: white;
  padding: 24px 20px;
  box-shadow: 2px 0 20px rgba(0, 0, 0, 0.05);
  border-right: 1px solid #f0f0f0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  /* Desktop - Static positioning */
  position: sticky;
  top: 0;
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    width: 240px;
    padding: 20px 16px;
  }

  /* Mobile - Floating overlay */
  ${media.mobile} {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    max-width: 300px;
    height: 100vh;
    z-index: 1000;
    padding: 20px 16px;
    box-shadow: ${(props) =>
      props.$isOpen ? "4px 0 24px rgba(0, 0, 0, 0.15)" : "none"};
    transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${media.smallMobile} {
    max-width: 85vw;
    padding: 16px 12px;
  }
`;

const ScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  margin: 0 -8px;
  padding: 0 8px;
  scrollbar-width: thin;
  scrollbar-color: #d0d0d0 transparent;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 4px;

    &:hover {
      background: #999;
    }
  }

  ${media.mobile} {
    overflow: visible;
    margin: 0;
    padding: 0;
  }
`;

const Overlay = styled.div`
  display: none;

  ${media.mobile} {
    display: ${(props) => (props.$isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    z-index: 999;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Updated Toggle Button with new style
const ToggleButton = styled.button`
  display: none;
  background: transparent;
  color: #1a1a1a;
  border: none;
  border-bottom: 2px solid #6ada1b;
  border-radius: 0;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  min-height: 56px;
  z-index: 1001;
  transition: all 0.3s ease;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.5px;

  ${media.mobile} {
    display: flex;
  }

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

  &:active {
    transform: translateY(2px);
  }

  svg {
    width: 18px;
    height: 18px;
    stroke: #1a1a1a;
    transition: stroke 0.3s ease;
  }

  &:hover svg {
    stroke: #6ada1b;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #f5f5f5;
  flex-shrink: 0;
`;

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #6ada1b;
  }

  ${media.mobile} {
    font-size: 18px;
  }

  ${media.smallMobile} {
    font-size: 16px;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

// Updated Clear Button with new style
const ClearButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 2px solid #6ada1b;
  color: #1a1a1a;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 0;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  letter-spacing: 0.5px;

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

  ${media.smallMobile} {
    font-size: 11px;
  }
`;

// Updated Close Button with new style
const CloseButton = styled.button`
  background: transparent;
  border: none;
  border-bottom: 2px solid #6ada1b;
  cursor: pointer;
  font-size: 20px;
  color: #1a1a1a;
  padding: 6px 0;
  transition: all 0.3s ease;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
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

  @media (min-width: 769px) {
    display: none;
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 20px;
  background: #fafafa;
  border-radius: 8px;
  padding: 0 12px;

  &:last-of-type {
    margin-bottom: 16px;
  }
`;

// Updated Filter Header with new style
const FilterHeader = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 0;
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
`;

const FilterTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  ${FilterHeader}:hover & {
    color: #6ada1b;
  }

  ${media.smallMobile} {
    font-size: 13px;
  }
`;

const Badge = styled.span`
  background: #6ada1b;
  color: white;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 6px;
  border-radius: 12px;
  margin-left: 8px;
`;

const ChevronIcon = styled(ChevronDown)`
  width: 16px;
  height: 16px;
  transition: all 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  color: #999;
  flex-shrink: 0;

  ${FilterHeader}:hover & {
    color: #6ada1b;
  }
`;

const FilterContent = styled.div`
  max-height: ${(props) => (props.$isOpen ? "400px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${(props) => (props.$isOpen ? "0 0 12px 0" : "0")};
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// Updated Checkbox Label with new style
const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 13px;
  color: #555;
  transition: all 0.3s ease;
  padding: 6px 8px;
  border-radius: 6px;
  border-bottom: 2px solid transparent;
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
    background: #f0f0f0;
  }

  ${media.smallMobile} {
    font-size: 12px;
    padding: 8px;
  }
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  accent-color: #6ada1b;
  cursor: pointer;
  border: 2px solid #d0d0d0;
  border-radius: 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;

  ${media.smallMobile} {
    width: 20px;
    height: 20px;
  }

  &:checked {
    background-color: #6ada1b;
    border-color: #6ada1b;
  }
`;

const Count = styled.span`
  margin-left: auto;
  color: #999;
  font-size: 11px;
  transition: color 0.3s ease;

  ${CheckboxLabel}:hover & {
    color: #6ada1b;
  }
`;

const PriceInputGroup = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0 8px;
`;

// Updated Price Input with new style
const PriceInput = styled.input`
  flex: 1;
  width: 50%;
  padding: 8px 10px;
  border: none;
  border-bottom: 2px solid #e0e0e0;
  border-radius: 0;
  font-size: 13px;
  color: #1a1a1a;
  transition: all 0.3s ease;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom-color: #6ada1b;
  }

  &:hover {
    border-bottom-color: #6ada1b;
  }

  &::placeholder {
    color: #aaa;
  }
`;

// Updated Range Slider with new color
const RangeSlider = styled.input`
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(
    to right,
    #6ada1b 0%,
    #6ada1b ${(props) => props.$percentage}%,
    #e5e5e5 ${(props) => props.$percentage}%,
    #e5e5e5 100%
  );
  outline: none;
  -webkit-appearance: none;
  margin: 15px 0 10px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #6ada1b;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(106, 218, 27, 0.3);
    transition: all 0.2s ease;
    border: 2px solid white;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 2px 12px rgba(106, 218, 27, 0.5);
    }
  }
`;

const PriceDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
  font-weight: 500;
  margin: 8px 0 4px;
`;

// Updated Star Rating with new hover color
const StarRating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 6px;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
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
    background: #f0f0f0;
  }
`;

const Star = styled.span`
  color: ${(props) => (props.$filled ? "#6ADA1B" : "#ddd")};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
    color: #6ada1b;
  }
`;

const RatingLabel = styled.span`
  font-size: 13px;
  color: #555;
  transition: color 0.3s ease;
  flex: 1;

  ${StarRating}:hover & {
    color: #6ada1b;
  }
`;

// Updated Apply Button with new style
const ApplyButton = styled.button`
  width: 100%;
  padding: 14px 0;
  background: transparent;
  color: #1a1a1a;
  border: none;
  border-bottom: 2px solid #6ada1b;
  border-radius: 0;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 16px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  flex-shrink: 0;
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

  &:hover:not(:disabled)::after {
    width: 100%;
  }

  &:hover:not(:disabled) {
    color: #6ada1b;
  }

  &:active:not(:disabled) {
    transform: translateY(2px);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border-bottom-color: #ccc;
  }
`;

// Main Sidebar Component (rest remains the same)
const FiltersSidebar = ({
  onFiltersApply = () => {},
  isOpen = true,
  onToggle = () => {},
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  const [openSections, setOpenSections] = useState({
    categories: true,
    price: true,
    rating: false,
    availability: false,
  });

  const [filters, setFilters] = useState({
    categories: [],
    priceMin: 0,
    priceMax: 1000,
    rating: [],
    availability: [],
  });

  // Mock counts for demo
  const categoryCounts = {
    Electronics: 45,
    Clothing: 32,
    "Home & Garden": 28,
    Sports: 19,
    Books: 15,
  };

  useEffect(() => {
    setIsSidebarOpen(isOpen);
  }, [isOpen]);

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleCheckboxChange = useCallback((filterType, value) => {
    setFilters((prev) => {
      const current = prev[filterType] || [];
      if (current.includes(value)) {
        return {
          ...prev,
          [filterType]: current.filter((item) => item !== value),
        };
      } else {
        return {
          ...prev,
          [filterType]: [...current, value],
        };
      }
    });
  }, []);

  const handlePriceChange = useCallback((type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: Math.max(0, parseInt(value) || 0),
    }));
  }, []);

  const handleApply = useCallback(() => {
    onFiltersApply(filters);
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
      onToggle(false);
    }
  }, [filters, onFiltersApply, onToggle]);

  const handleClose = useCallback(() => {
    setIsSidebarOpen(false);
    onToggle(false);
  }, [onToggle]);

  const clearFilters = useCallback(() => {
    setFilters({
      categories: [],
      priceMin: 0,
      priceMax: 1000,
      rating: [],
      availability: [],
    });
  }, []);

  const isFilterActive = useMemo(() => {
    return (
      filters.categories.length > 0 ||
      filters.rating.length > 0 ||
      filters.availability.length > 0 ||
      filters.priceMin > 0 ||
      filters.priceMax < 1000
    );
  }, [filters]);

  const activeFilterCount = useMemo(() => {
    return (
      filters.categories.length +
      filters.rating.length +
      filters.availability.length +
      (filters.priceMin > 0 ? 1 : 0) +
      (filters.priceMax < 1000 ? 1 : 0)
    );
  }, [filters]);

  return (
    <>
      <Overlay $isOpen={isSidebarOpen} onClick={handleClose} />
      <SidebarContainer
        $isOpen={isSidebarOpen}
        onClick={(e) => e.stopPropagation()}
      >
        <Header>
          <Title>
            <Filter size={20} />
            Filters
            {activeFilterCount > 0 && <Badge>{activeFilterCount}</Badge>}
          </Title>
          <HeaderActions>
            {isFilterActive && (
              <ClearButton onClick={clearFilters}>Clear All</ClearButton>
            )}
            <CloseButton onClick={handleClose} aria-label="Close filters">
              <X size={20} />
            </CloseButton>
          </HeaderActions>
        </Header>

        <ScrollableContent>
          {/* Categories Filter */}
          <FilterGroup>
            <FilterHeader onClick={() => toggleSection("categories")}>
              <FilterTitle>Categories</FilterTitle>
              <ChevronIcon $isOpen={openSections.categories} />
            </FilterHeader>
            <FilterContent $isOpen={openSections.categories}>
              <CheckboxGroup>
                {Object.entries(categoryCounts).map(([category, count]) => (
                  <CheckboxLabel key={category}>
                    <Checkbox
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() =>
                        handleCheckboxChange("categories", category)
                      }
                    />
                    {category}
                    <Count>({count})</Count>
                  </CheckboxLabel>
                ))}
              </CheckboxGroup>
            </FilterContent>
          </FilterGroup>

          {/* Price Range Filter */}
          <FilterGroup>
            <FilterHeader onClick={() => toggleSection("price")}>
              <FilterTitle>Price Range</FilterTitle>
              <ChevronIcon $isOpen={openSections.price} />
            </FilterHeader>
            <FilterContent $isOpen={openSections.price}>
              <PriceInputGroup>
                <PriceInput
                  type="number"
                  placeholder="Min $"
                  value={filters.priceMin || ""}
                  onChange={(e) =>
                    handlePriceChange("priceMin", e.target.value)
                  }
                  min="0"
                />
                <PriceInput
                  type="number"
                  placeholder="Max $"
                  value={filters.priceMax === 1000 ? "" : filters.priceMax}
                  onChange={(e) =>
                    handlePriceChange("priceMax", e.target.value)
                  }
                  max="10000"
                />
              </PriceInputGroup>
              <PriceDisplay>
                <span>${filters.priceMin}</span>
                <span>
                  ${filters.priceMax === 1000 ? "1000+" : filters.priceMax}
                </span>
              </PriceDisplay>
              <RangeSlider
                type="range"
                min="0"
                max="1000"
                value={filters.priceMax}
                onChange={(e) => handlePriceChange("priceMax", e.target.value)}
                $percentage={(Math.min(filters.priceMax, 1000) / 1000) * 100}
              />
            </FilterContent>
          </FilterGroup>

          {/* Rating Filter */}
          <FilterGroup>
            <FilterHeader onClick={() => toggleSection("rating")}>
              <FilterTitle>Rating</FilterTitle>
              <ChevronIcon $isOpen={openSections.rating} />
            </FilterHeader>
            <FilterContent $isOpen={openSections.rating}>
              <CheckboxGroup>
                {[5, 4, 3, 2, 1].map((rating) => (
                  <StarRating
                    key={rating}
                    onClick={() =>
                      handleCheckboxChange("rating", rating.toString())
                    }
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} $filled={i < rating}>
                        ★
                      </Star>
                    ))}
                    <RatingLabel>& Up</RatingLabel>
                    <Checkbox
                      type="checkbox"
                      checked={filters.rating.includes(rating.toString())}
                      onChange={() =>
                        handleCheckboxChange("rating", rating.toString())
                      }
                      onClick={(e) => e.stopPropagation()}
                    />
                  </StarRating>
                ))}
              </CheckboxGroup>
            </FilterContent>
          </FilterGroup>

          {/* Availability Filter */}
          <FilterGroup>
            <FilterHeader onClick={() => toggleSection("availability")}>
              <FilterTitle>Availability</FilterTitle>
              <ChevronIcon $isOpen={openSections.availability} />
            </FilterHeader>
            <FilterContent $isOpen={openSections.availability}>
              <CheckboxGroup>
                {[
                  { label: "In Stock", count: 124 },
                  { label: "On Sale", count: 34 },
                  { label: "Free Shipping", count: 56 },
                ].map(({ label, count }) => (
                  <CheckboxLabel key={label}>
                    <Checkbox
                      type="checkbox"
                      checked={filters.availability.includes(label)}
                      onChange={() =>
                        handleCheckboxChange("availability", label)
                      }
                    />
                    {label}
                    <Count>({count})</Count>
                  </CheckboxLabel>
                ))}
              </CheckboxGroup>
            </FilterContent>
          </FilterGroup>
        </ScrollableContent>

        <ApplyButton onClick={handleApply} disabled={!isFilterActive}>
          Apply Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </ApplyButton>
      </SidebarContainer>

      <ToggleButton
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
          onToggle(!isSidebarOpen);
        }}
      >
        <Sliders size={18} />
        Filters
        {activeFilterCount > 0 && <Badge>{activeFilterCount}</Badge>}
      </ToggleButton>
    </>
  );
};

export default FiltersSidebar;
