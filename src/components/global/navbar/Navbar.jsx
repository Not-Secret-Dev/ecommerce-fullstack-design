import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const NavbarContent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  gap: 10px;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;

  img {
    height: 24px;
    width: auto;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    gap: 6px;
  }
`;

const Navlist = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const CartIcon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 99;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  box-sizing: border-box;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
    transition: color 0.3s ease;

    &:hover {
      color: #666;
    }
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 28px;
  width: 100%;
`;

const Overlay = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = ["Home", "Shop", "About", "Contact"];

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Logo>
            <img src="/assets/global/logo.png" alt="Logo" />
            LUXE
          </Logo>

          {/* Desktop Navigation */}
          <Navlist>
            {navItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </Navlist>

          {/* Icons and Hamburger */}
          <IconsContainer>
            <CartIcon>
              <MdOutlineShoppingCart size={24} />
            </CartIcon>
            <HamburgerIcon onClick={toggleMenu}>
              <HiOutlineMenuAlt3 />
            </HamburgerIcon>
          </IconsContainer>
        </NavbarContent>
      </NavbarContainer>

      {/* Mobile Menu */}
      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
      <MobileMenu $isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu}>
          <MdClose />
        </CloseButton>
        <MobileMenuList>
          {navItems.map((item) => (
            <li key={item} onClick={closeMenu}>
              {item}
            </li>
          ))}
        </MobileMenuList>
      </MobileMenu>
    </>
  );
};

export default Navbar;
