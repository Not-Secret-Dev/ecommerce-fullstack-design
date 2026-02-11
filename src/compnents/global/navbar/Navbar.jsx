import React, { useState } from "react";
import styled from "styled-components";
import { FaUserLarge } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavbarContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const UpperNavbarContainer = styled.nav`
  width: 85%;
  max-width: 1200px;
  min-height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 16px 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
    min-height: auto;
    flex-wrap: wrap;
    gap: 12px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: #8cb7f5;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-shrink: 0;

  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    font-size: 20px;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

const SearchBarContainer = styled.div`
  width: 665px;
  max-width: 100%;
  height: 40px;
  border: 2px solid #0d6efd;
  border-radius: 6px;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 1;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 520px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    order: 3;
    flex-basis: 100%;
  }

  #searchbox {
    flex: 1;
    height: 40px;
    outline: none;
    padding: 0 12px;
    border: none;
    font-size: 16px;
    box-sizing: border-box;

    &::placeholder {
      font-size: 16px;
      color: #8b96a5;
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding: 0 10px;

      &::placeholder {
        font-size: 14px;
      }
    }
  }

  select {
    width: 140px;
    height: 40px;
    outline: none;
    border: none;
    border-left: 2px solid #0d6efd;
    font-size: 16px;
    padding: 0 8px;
    background-color: #fff;
    cursor: pointer;
    flex-shrink: 0;

    @media (max-width: 768px) {
      display: none;
    }
  }

  #search {
    width: 100px;
    height: 40px;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: #0d6efd;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    flex-shrink: 0;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0b5ed7;
    }

    &:active {
      background-color: #0a58ca;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;

  @media (max-width: 1024px) {
    gap: 12px;
  }

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const IconLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.$isActive ? "#0d6efd" : "#8b96a5")};
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s ease;
  padding: 4px 8px;
  border-radius: 6px;
  user-select: none;

  svg {
    font-size: 20px;
    margin-bottom: 4px;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #0d6efd;
    background-color: #f0f7ff;

    svg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 1024px) {
    font-size: 13px;
    padding: 4px 6px;

    svg {
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 4px;

    svg {
      font-size: 20px;
      margin-bottom: 2px;
    }

    &:nth-child(2),
    &:nth-child(3) {
      display: none;
    }
  }
`;

const LowerNavbarContainer = styled.nav`
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  box-sizing: border-box;
  background-color: #fff;

  @media (max-width: 768px) {
    min-height: 48px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      display: none;
    }

    scrollbar-width: none;
  }
`;

const LowerNavbarContent = styled.div`
  width: 85%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: flex-start;
    padding: 0 16px;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    padding: 8px 0;
  }
`;

const NavMenuItem = styled.li`
  cursor: pointer;
  color: ${(props) => (props.$isActive ? "#0d6efd" : "#1c1c1c")};
  font-weight: ${(props) => (props.$isActive ? "600" : "500")};
  font-size: 14px;
  white-space: nowrap;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
  user-select: none;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
      scaleX(${(props) => (props.$isActive ? "1" : "0")});
    width: 80%;
    height: 2px;
    background-color: #0d6efd;
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #0d6efd;
    background-color: #f0f7ff;

    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const SelectorsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  flex-shrink: 0;

  select {
    padding: 6px 10px;
    border: 1px solid #e9ecef;
    border-radius: 4px;
    outline: none;
    background-color: #fff;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: #0d6efd;
    }

    &:focus {
      border-color: #0d6efd;
      box-shadow: 0 0 0 2px rgba(13, 110, 253, 0.1);
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #1c1c1c;
  }

  @media (max-width: 1024px) {
    gap: 15px;

    select {
      font-size: 13px;
      padding: 5px 8px;
    }

    span {
      font-size: 13px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Hamburger = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  padding: 8px;
  border-radius: 6px;
  transition: all 0.2s ease;

  svg {
    font-size: 22px;
    color: #333;
    transition: transform 0.2s ease;
  }

  &:hover {
    background-color: #f0f7ff;

    svg {
      color: #0d6efd;
    }
  }

  &:active {
    transform: scale(0.95);

    svg {
      transform: rotate(90deg);
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const Navbar = () => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const menuItems = [
    "All Category",
    "Hot Offers",
    "Git Boxes",
    "Projects",
    "Menu Item",
    "Help",
  ];

  return (
    <NavbarContainer>
      <UpperNavbarContainer>
        <LeftGroup>
          <Hamburger aria-label="Menu">
            <FaBars />
          </Hamburger>
          <Logo>
            <img src="/public/Assets/Navbar/logo-symbol.svg" alt="Logo" />
            Brand
          </Logo>
        </LeftGroup>
        <SearchBarContainer>
          <input type="text" placeholder="Search" id="searchbox" />
          <select name="categories" id="categories">
            <option value="All">All category</option>
            <option value="Clothes">Clothes</option>
            <option value="Accessories">Accessories</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Beauty">Beauty</option>
          </select>
          <input type="button" value="Search" id="search" />
        </SearchBarContainer>
        <LinksContainer>
          <IconLink
            $isActive={activeIcon === "profile"}
            onClick={() => setActiveIcon("profile")}
          >
            <FaUserLarge />
            Profile
          </IconLink>
          <IconLink
            $isActive={activeIcon === "message"}
            onClick={() => setActiveIcon("message")}
          >
            <MdMessage />
            Message
          </IconLink>
          <IconLink
            $isActive={activeIcon === "orders"}
            onClick={() => setActiveIcon("orders")}
          >
            <FaHeart />
            Orders
          </IconLink>
          <IconLink
            $isActive={activeIcon === "cart"}
            onClick={() => setActiveIcon("cart")}
          >
            <FaShoppingCart />
            My cart
          </IconLink>
        </LinksContainer>
      </UpperNavbarContainer>
      <LowerNavbarContainer>
        <LowerNavbarContent>
          <NavMenu>
            {menuItems.map((item, index) => (
              <NavMenuItem
                key={index}
                $isActive={activeMenuItem === index}
                onClick={() => setActiveMenuItem(index)}
              >
                {item}
              </NavMenuItem>
            ))}
          </NavMenu>
          <SelectorsContainer>
            <select>
              <option>US Dollar, USD</option>
              <option>Euro, EUR</option>
              <option>British Pound, GBP</option>
            </select>
            <span>
              Ship to
              <select>
                <option>Germany 🇩🇪</option>
                <option>United States 🇺🇸</option>
                <option>United Kingdom 🇬🇧</option>
              </select>
            </span>
          </SelectorsContainer>
        </LowerNavbarContent>
      </LowerNavbarContainer>
    </NavbarContainer>
  );
};

export default Navbar;
