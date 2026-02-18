// ProductCard/ProductCard.jsx
import React, { useState } from "react";
import styled from "styled-components";

// Styled components
const Card = styled.div`
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    sans-serif;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${(props) => (props.isLoaded ? "block" : "none")};
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-size: 1.2rem;
  font-weight: 500;

  &::after {
    content: "📷";
    font-size: 48px;
    opacity: 0.9;
  }
`;

const ProductContent = styled.div`
  padding: 16px;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 8px;
`;

const CurrentPrice = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #2c3e50;
`;

const OriginalPrice = styled.span`
  font-size: 16px;
  color: #95a5a6;
  text-decoration: line-through;
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: #f1c40f;
  font-size: 16px;
`;

const RatingValue = styled.span`
  color: #7f8c8d;
  font-size: 14px;
  font-weight: 500;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c3e50;
  margin: 0;
  line-height: 1.4;
`;

const ProductSubtitle = styled.span`
  font-size: 14px;
  color: #7f8c8d;
  display: block;
  margin-top: 4px;
`;

const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating / 2); // Convert 7.5/10 to 3.75/5 scale
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i}>⭐</span>);
      } else {
        stars.push(
          <span key={i} style={{ opacity: 0.3 }}>
            ⭐
          </span>,
        );
      }
    }

    return stars;
  };

  // Construct image URL properly
  const getImageUrl = () => {
    if (!product.imgSrc) return null;

    // If it's already a full URL, use it as is
    if (product.imgSrc.startsWith("http")) {
      return product.imgSrc;
    }

    // For local images in public folder
    if (product.imgSrc.startsWith("/")) {
      return product.imgSrc;
    }

    // For images in src folder (with Vite)
    return new URL(`../assets/${product.imgSrc}`, import.meta.url).href;
  };

  const imageUrl = getImageUrl();

  return (
    <Card>
      <ImageContainer>
        {!imageError && imageUrl ? (
          <StyledImage
            src={imageUrl}
            alt={product.title}
            isLoaded={imageLoaded}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : null}

        {(!imageLoaded || imageError || !imageUrl) && <Placeholder />}
      </ImageContainer>

      <ProductContent>
        <PriceContainer>
          <CurrentPrice>{product.currentPrice}</CurrentPrice>
          <OriginalPrice>{product.originalPrice}</OriginalPrice>
        </PriceContainer>

        <RatingContainer>
          <Stars>{renderStars(product.rating)}</Stars>
          <RatingValue>{product.rating}</RatingValue>
        </RatingContainer>

        <ProductTitle>
          {product.title}
          <ProductSubtitle>{product.subtitle}</ProductSubtitle>
        </ProductTitle>
      </ProductContent>
    </Card>
  );
};

export default ProductCard;
