import React from "react";
import styled from "styled-components";

const breakpoints = {
  mobile: "768px",
};

const MainContainer = styled.section`
  display: flex;
  flex-direction: column; /* Stack vertically on mobile */
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  gap: 40px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row; /* Side-by-side on tablet/desktop */
    padding: 80px 40px;
    gap: 80px;
  }
`;

const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${breakpoints.mobile}) {
    width: 50%;
  }

  img {
    width: 100%; /* Fill container */
    max-width: 500px; /* Prevent it from getting too huge on big screens */
    height: auto;
    object-fit: cover;
    border-radius: 12px;
    aspect-ratio: 1 / 1;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const RightContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    width: 50%;
    align-items: flex-start;
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #111;
  margin-bottom: 20px;
  font-weight: 700;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
  max-width: 500px;
`;

const Philosophy = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <img src="/assets/pages/hero/woman.jpg" alt="Our philosophy focus" />
      </LeftContainer>
      <RightContainer>
        <Title>Our Philosophy</Title>
        <Text>
          At our company, we believe in creating sustainable and ethical fashion
          that respects both people and the planet. We focus on architectural
          precision and uncompromising comfort.
        </Text>
      </RightContainer>
    </MainContainer>
  );
};

export default Philosophy;
