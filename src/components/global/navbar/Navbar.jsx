import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom"; // Added Link and NavLink
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

const Logo = styled(Link)`
  // Changed to Link
  font-size: 20px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  flex-shrink: 0;
  text-decoration: none; // Remove default link styling
  color: inherit;

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

  @media (max-width: 768px) {
    display: none;
  }
`;

// Styled NavLink for active states
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #111;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #6ada1b;
  }

  &.active {
    color: #6ada1b;
    border-bottom: 2px solid #6ada1b;
    padding-bottom: 4px;
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

const CartIcon = styled(Link)`
  // Changed to Link
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  color: inherit;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
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
  top: 0; // Better to cover full screen for mobile menus
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
  z-index: 101;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.3s ease;
  box-sizing: border-box;
`;

const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const MobileNavLink = styled(NavLink)`
  text-decoration: none;
  color: #111;
  font-size: 18px;
  font-weight: 500;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
  display: block;

  &.active {
    color: #6ada1b;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 28px;
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
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Map nav names to paths defined in App.jsx
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/listings" },
    { name: "About", path: "/about" }, // Path placeholder
    { name: "Contact", path: "/contact" }, // Path placeholder
  ];

  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Logo to="/" onClick={closeMenu}>
            <img src="/assets/global/logo.png" alt="Logo" />
            LUXE
          </Logo>

          <Navlist>
            {navItems.map((item) => (
              <li key={item.name}>
                <StyledNavLink to={item.path}>{item.name}</StyledNavLink>
              </li>
            ))}
          </Navlist>

          <IconsContainer>
            <CartIcon to="/cart">
              <MdOutlineShoppingCart size={24} />
            </CartIcon>
            <HamburgerIcon onClick={toggleMenu}>
              <HiOutlineMenuAlt3 />
            </HamburgerIcon>
          </IconsContainer>
        </NavbarContent>
      </NavbarContainer>

      <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />

      <MobileMenu $isOpen={isMenuOpen}>
        <CloseButton onClick={closeMenu}>
          <MdClose />
        </CloseButton>
        <MobileMenuList>
          {navItems.map((item) => (
            <li key={item.name}>
              <MobileNavLink to={item.path} onClick={closeMenu}>
                {item.name}
              </MobileNavLink>
            </li>
          ))}
        </MobileMenuList>
      </MobileMenu>
    </>
  );
};

export default Navbar;
