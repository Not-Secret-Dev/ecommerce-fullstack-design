import React from "react";
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
`;

const UpperNavbarContainer = styled.nav`
  width: 85%;
  max-width: 1200px;
  height: 86px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 95%;
    padding: 0 10px;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 10px;
    height: auto;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  color: #8cb7f5;
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    width: 44px;
    height: 44px;
    margin-right: 10px;
  }
`;

const SearchBarContainer = styled.div`
  width: 665px;
  max-width: 100%;
  height: 40px;
  border: 1px solid #0d6efd;
  border-radius: 10px;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 520px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    order: 3;

    select {
      display: none;
    }
    #search {
      display: none;
    }
    #searchbox {
      border-right: 2px solid #dee2e7;
    }
  }

  #searchbox {
    flex: 1;
    height: 40px;
    outline: none;
    padding-left: 10px;
    border-right: 1px solid #0d6efd;
    border: none;

    &::placeholder {
      font-size: 16px;
      color: #8b96a5;
    }
  }

  select {
    width: 140px;
    height: 40px;
    outline: none;
    border: none;
    border-left: 1px solid #0d6efd;
    font-size: 16px;
    padding-left: 5px;
    background-color: #fff;
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
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  .icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #8b96a5;
    cursor: pointer;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    .icon:nth-child(2),
    .icon:nth-child(3) {
      display: none;
    }
  }
`;

const LowerNavbarContainer = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  border-top: 1px solid #e9ecef;
  box-sizing: border-box;

  @media (max-width: 768px) {
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const LowerNavbarContent = styled.div`
  width: 85%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    color: #8b96a5;
    font-size: 14px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
    gap: 20px;
    padding-bottom: 5px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SelectorsContainer = styled.div`
  display: flex;
  gap: 20px;

  select {
    padding: 5px;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 14px;
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
  padding: 0;

  svg {
    font-size: 22px;
    color: #333;
  }

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <UpperNavbarContainer>
        <LeftGroup>
          <Hamburger>
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
            <option value="All">All cartegory</option>
            <option value="Clothes">Clothes</option>
            <option value="Accessories">Accessories</option>
            <option value="Electronics">Electronics</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Beauty">Beauty</option>
          </select>
          <input type="button" value="Search" id="search" />
        </SearchBarContainer>
        <LinksContainer>
          <div className="icon">
            <FaUserLarge id="symbol" />
            Profile
          </div>
          <div className="icon">
            <MdMessage id="symbol" />
            Message
          </div>
          <div className="icon">
            <FaHeart id="symbol" />
            Orders
          </div>
          <div className="icon">
            <FaShoppingCart id="symbol" />
            My cart
          </div>
        </LinksContainer>
      </UpperNavbarContainer>
      <LowerNavbarContainer>
        <LowerNavbarContent>
          <NavMenu>
            <li>All Category</li>
            <li>Hot Offers</li>
            <li>Git Boxes</li>
            <li>Projects</li>
            <li>Menu Item</li>
            <li>Help</li>
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
