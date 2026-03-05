import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PhilBox = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 600px;
  background: #000;
  color: #fff;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImageSide = styled.div`
  background: url("/assets/pages/hero/woman.jpg") center/cover no-repeat;
  filter: grayscale(40%);
  transition: filter 0.8s ease;
  min-height: 400px;
  &:hover {
    filter: grayscale(0%);
  }
`;

const StoryLink = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  color: #6ada1b;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s ease;
  &:hover {
    color: #fff;
  }
`;

const Philosophy = () => (
  <PhilBox>
    <ImageSide />
    <div
      style={{
        padding: "10%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2 style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "300" }}>
        Our <br />
        Philosophy
      </h2>
      <p style={{ color: "#aaa", lineHeight: "1.8", maxWidth: "400px" }}>
        We create for the individual who finds beauty in the architecture of
        simplicity.
      </p>
      <StoryLink to="/about">READ OUR STORY →</StoryLink>
    </div>
  </PhilBox>
);

export default Philosophy;
