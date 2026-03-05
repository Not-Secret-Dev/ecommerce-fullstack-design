import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link

const HeroSection = styled.section`
  height: 90vh;
  min-height: 500px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: end;
  padding: 5%;
  background:
    linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, transparent 70%),
    url("/assets/pages/hero/bg.jpg") center/cover no-repeat;
`;

const HeroContent = styled.div`
  max-width: 600px;
  color: #fff;
`;

const MainTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 300;
  line-height: 1;
  margin-bottom: 30px;
  span {
    font-family: "Georgia", serif;
    font-style: italic;
  }
`;

// Styled Link that looks like a button
const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 16px 35px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  border: 1px solid transparent;

  &.primary {
    background: #6ada1b;
    color: #000;
    &:hover {
      background: #fff;
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(106, 218, 27, 0.3);
    }
  }

  &.ghost {
    background: transparent;
    color: #fff;
    border-color: rgba(255, 255, 255, 0.5);
    margin-left: 15px;
    &:hover {
      background: #fff;
      color: #000;
      border-color: #fff;
      transform: translateY(-5px);
    }
  }
`;

const Hero = () => (
  <HeroSection>
    <HeroContent>
      <p
        style={{ color: "#6ada1b", letterSpacing: "4px", marginBottom: "10px" }}
      >
        EST. 2026
      </p>
      <MainTitle>
        Defined by <br />
        <span>Simplicity</span>
      </MainTitle>
      <div>
        <StyledLink to="/listings" className="primary">
          Shop Now
        </StyledLink>
        <StyledLink to="/about" className="ghost">
          Lookbook
        </StyledLink>
      </div>
    </HeroContent>
  </HeroSection>
);

export default Hero;
