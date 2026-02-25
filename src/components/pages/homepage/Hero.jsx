import React from "react";
import styled from "styled-components";

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
};

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url("/assets/pages/hero/bg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 20px;
  box-sizing: border-box;
`;

const HeroBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 24px;
  width: 100%;
  max-width: 700px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  padding: 40px 20px;
  text-align: center;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: ${breakpoints.mobile}) {
    padding: 30px 15px;
    width: 95%;
  }
`;

const HeroTitle = styled.p`
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-transform: uppercase;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.9rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 2rem;
  color: #fff;
  margin: 0;
  line-height: 1.1;

  span {
    font-weight: bold;
    font-style: italic;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 3.5rem;
  }
`;

const HeroSubtitle2 = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 1.5rem;
  width: 100%;
  max-width: 400px;
  line-height: 1.5;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
  }
`;

const HeroButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 2rem;
  width: 100%;
  max-width: 300px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    max-width: none;
    justify-content: center;
  }
`;

const BaseButton = styled.button`
  padding: 14px 28px;
  font-size: 0.95rem;
  border-radius: 40px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  width: 100%;
  border: none;

  @media (min-width: ${breakpoints.mobile}) {
    width: auto;
    min-width: 160px;
  }
`;

const ShopButton = styled(BaseButton)`
  color: #000;
  background-color: #6ada1b;

  &:hover {
    background-color: #5bc217;
    transform: scale(1.02);
  }
`;

const LookbookButton = styled(BaseButton)`
  color: #fff;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5);

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #fff;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroBackground>
        <HeroTitle>NEW COLLECTION 2026</HeroTitle>
        <HeroSubtitle>
          Defined by <span>Simplicity</span>
        </HeroSubtitle>
        <HeroSubtitle2>
          Experience the intersection of architectural precision and
          uncompromising comfort.
        </HeroSubtitle2>
        <HeroButtonGroup>
          <ShopButton aria-label="Shop the new collection">Shop Now</ShopButton>
          <LookbookButton aria-label="View our lookbook">
            Lookbook
          </LookbookButton>
        </HeroButtonGroup>
      </HeroBackground>
    </HeroSection>
  );
};

export default Hero;
