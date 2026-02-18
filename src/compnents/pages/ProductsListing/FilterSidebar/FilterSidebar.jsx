import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useFilterContext } from "./FilterContext";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    max-height: 0;
  }
  to {
    opacity: 1;
    max-height: 500px;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const SidebarContainer = styled.aside`
  width: 240px;
  background: transparent;
  padding: 0;
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  position: relative;
  overflow: hidden;
`;

const FilterSection = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 12px;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: ${(props) => props.$index * 0.1}s;
  animation-fill-mode: both;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateX(4px);
    background: rgba(255, 255, 255, 0.3);
    padding-left: 8px;
    border-radius: 8px;
    margin-left: -8px;
    padding-right: 8px;
  }
`;

const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 8px;
  padding: 4px 0;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(0, 123, 255, 0.08);
    transform: translateX(2px);
    padding-left: 4px;
    padding-right: 4px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const FilterTitle = styled.h3`
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  color: #1a1a1a;
  transition: color 0.3s ease;

  ${FilterHeader}:hover & {
    color: #007bff;
  }
`;

const ChevronIcon = styled.span`
  font-size: 12px;
  color: #666;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  display: inline-block;

  ${FilterHeader}:hover & {
    color: #007bff;
    transform: ${(props) =>
      props.$isOpen ? "rotate(180deg) scale(1.2)" : "rotate(0deg) scale(1.2)"};
  }
`;

const FilterContent = styled.div`
  overflow: hidden;
  animation: ${(props) => (props.$isOpen ? slideDown : "none")} 0.4s ease-out;
  transition: all 0.3s ease;
`;

const FilterItem = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #333;
  padding: 2px 4px;
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &:hover {
    color: #007bff;
    background: rgba(0, 123, 255, 0.05);
    transform: translateX(4px);
    padding-left: 8px;
  }

  &:active {
    transform: translateX(4px) scale(0.98);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: linear-gradient(180deg, #007bff, #0056b3);
    border-radius: 0 2px 2px 0;
    transition: height 0.3s ease;
  }

  &:hover::before {
    height: 70%;
  }
`;

const CheckboxWrapper = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  width: 100%;
  height: 100%;
  margin: 0;
  z-index: 1;
`;

const StyledCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid ${(props) => (props.$checked ? "#007bff" : "#d1d5db")};
  border-radius: 4px;
  background: ${(props) =>
    props.$checked
      ? "linear-gradient(135deg, #007bff 0%, #0056b3 100%)"
      : "white"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;

  ${HiddenCheckbox}:hover ~ & {
    border-color: #007bff;
    transform: scale(1.1);
  }

  ${HiddenCheckbox}:active ~ & {
    transform: scale(0.95);
  }

  &::after {
    content: "✓";
    color: white;
    font-size: 12px;
    font-weight: bold;
    opacity: ${(props) => (props.$checked ? 1 : 0)};
    transform: ${(props) =>
      props.$checked ? "scale(1) rotate(0deg)" : "scale(0) rotate(-180deg)"};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const CheckboxLabel = styled.span`
  transition: all 0.3s ease;

  ${FilterItem}:hover & {
    font-weight: 500;
  }
`;

const SeeAllLink = styled.a`
  color: #007bff;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  margin-top: 4px;
  padding: 2px 4px;
  border-radius: 4px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-weight: 500;

  &::after {
    content: "→";
    margin-left: 4px;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(0, 123, 255, 0.1);
    transform: translateX(4px);

    &::after {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateX(4px) scale(0.95);
  }
`;

const BadgeCount = styled.span`
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
  margin-left: auto;
  font-weight: 600;
  animation: ${pulse} 2s ease-in-out infinite;
`;

const FilterSections = {
  Category: ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"],
  Brands: ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"],
  Features: [
    "Metallic",
    "Plastic cover",
    "8GB Ram",
    "Super power",
    "Large Memory",
  ],
  "Price range": [],
  Condition: [],
  Ratings: [],
  Manufacturer: [],
};

const defaultChecked = {
  Brands: ["Samsung", "Apple", "Pocco"],
  Features: ["Metallic"],
};
const FilterSidebar = () => {
  const { checkedItems, handleCheckboxChange } = useFilterContext();

  const [openSections, setOpenSections] = useState({
    Category: true,
    Brands: true,
    Features: true,
    "Price range": false,
    Condition: false,
    Ratings: false,
    Manufacturer: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const isChecked = (category, item) => {
    return checkedItems[category]?.includes(item) || false;
  };

  const getCheckedCount = (category) => {
    return checkedItems[category]?.length || 0;
  };

  return (
    <SidebarContainer>
      {Object.entries(FilterSections).map(([category, items], index) => (
        <FilterSection key={category} $index={index}>
          <FilterHeader onClick={() => toggleSection(category)}>
            <FilterTitle>{category}</FilterTitle>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {getCheckedCount(category) > 0 && (
                <BadgeCount>{getCheckedCount(category)}</BadgeCount>
              )}
              <ChevronIcon $isOpen={openSections[category]}>▼</ChevronIcon>
            </div>
          </FilterHeader>

          {openSections[category] && items.length > 0 && (
            <FilterContent $isOpen={openSections[category]}>
              {items.map((item) => (
                <FilterItem key={item}>
                  <CheckboxWrapper>
                    <HiddenCheckbox
                      checked={isChecked(category, item)}
                      onChange={() => handleCheckboxChange(category, item)}
                    />
                    <StyledCheckbox $checked={isChecked(category, item)} />
                  </CheckboxWrapper>
                  <CheckboxLabel>{item}</CheckboxLabel>
                </FilterItem>
              ))}
              <SeeAllLink>See all</SeeAllLink>
            </FilterContent>
          )}
        </FilterSection>
      ))}
    </SidebarContainer>
  );
};

export default FilterSidebar;
