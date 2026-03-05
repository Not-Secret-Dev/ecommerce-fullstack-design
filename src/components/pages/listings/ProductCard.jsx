// ProductCard.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #e7e7e7; /* Amazon-style subtle border */
  border-radius: 4px;
  padding: 10px;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: #6ada1b;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Like Amazon, keeps the whole product visible */
    transition: transform 0.3s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Title = styled.h3`
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.3;
  height: 2.6em; /* Limits to exactly 2 lines */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #0f1111;
  margin-bottom: 4px;

  ${Card}:hover & {
    color: #c45500; /* Amazon-style hover orange or keep your green */
  }
`;

const Price = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
  color: #111;

  span {
    font-size: 0.7rem;
    vertical-align: super;
    margin-right: 2px;
  }
`;

const ProductCard = ({ product }) => (
  <Card to={`/product/${product.id}`}>
    <ImageWrapper>
      <img src={product.image} alt={product.title} />
    </ImageWrapper>
    <Title>{product.title}</Title>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        marginBottom: "4px",
      }}
    >
      <span style={{ color: "#ffa41c", fontSize: "0.8rem" }}>★★★★☆</span>
      <span style={{ fontSize: "0.7rem", color: "#007185" }}>1,240</span>
    </div>
    <Price>
      <span>$</span>
      {product.price}
    </Price>
    <p style={{ fontSize: "0.7rem", color: "#565959", marginTop: "4px" }}>
      Get it by <b>Monday</b>
    </p>
  </Card>
);

export default ProductCard;
