import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc"; // More minimal close icon

const Nav = styled.nav`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 5%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 4px;
  text-decoration: none;
  color: #111;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    height: 28px;
    filter: grayscale(1);
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;

  @media (max-width: 900px) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #111;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding: 5px 0;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1.5px;
    background: #6ada1b;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const IconButton = styled(Link)`
  color: #111;
  cursor: pointer;
  display: flex;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    color: #6ada1b;
  }
`;

const MenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  @media (max-width: 900px) {
    display: block;
  }
`;

const MobileOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  padding: 40px;
  transform: translateY(${(props) => (props.$isOpen ? "0" : "-100%")});
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
`;

const MobileLink = styled(NavLink)`
  font-size: 2.5rem;
  font-weight: 300;
  text-decoration: none;
  color: #111;
  margin-bottom: 20px;
  &.active {
    color: #6ada1b;
    font-style: italic;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/listings" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <Nav>
        <Content>
          <Logo to="/">LUXE</Logo>

          <NavList>
            {navItems.map((item) => (
              <li key={item.name}>
                <StyledNavLink to={item.path} end>
                  {item.name}
                </StyledNavLink>
              </li>
            ))}
          </NavList>

          <Icons>
            <IconButton to="/cart">
              <MdOutlineShoppingCart size={22} />
            </IconButton>
            <MenuButton onClick={() => setIsOpen(true)}>
              <HiOutlineMenuAlt3 />
            </MenuButton>
          </Icons>
        </Content>
      </Nav>

      <MobileOverlay $isOpen={isOpen}>
        <div
          style={{ alignSelf: "flex-end", cursor: "pointer" }}
          onClick={() => setIsOpen(false)}
        >
          <VscChromeClose size={32} />
        </div>
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navItems.map((item) => (
            <MobileLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </MobileLink>
          ))}
        </div>
      </MobileOverlay>
    </>
  );
};

export default Navbar;
