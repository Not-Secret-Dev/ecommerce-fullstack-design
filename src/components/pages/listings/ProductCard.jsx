import React, { useState } from "react";
import styled from "styled-components";
import { Heart, ShoppingCart, Star } from "lucide-react";

const media = {
  mobile: "@media (max-width: 768px)",
  smallMobile: "@media (max-width: 480px)",
};

const GridCard = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  background: white;
  display: flex;
  flex-direction: column;
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: #6ada1b;
  }
`;

const ListCard = styled.div`
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;
  background: white;
  display: flex;
  gap: 20px;
  padding: 20px;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: #6ada1b;
  }

  ${media.mobile} {
    flex-direction: column;
    gap: 12px;
  }
`;

// Updated Wishlist Button with new style
const WishlistButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
  padding: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6ada1b;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    transform: translateY(-2px);
  }

  svg {
    width: 18px;
    height: 18px;
    transition: all 0.3s ease;
  }

  &:hover svg {
    stroke: #6ada1b;
    fill: ${(props) => (props.$isWishlisted ? "#6ADA1B" : "none")};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: ${(props) => (props.$listView ? "200px" : "100%")};
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #f5f5f5;
  flex-shrink: 0;

  ${media.mobile} {
    width: ${(props) => (props.$listView ? "100%" : "100%")};
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${GridCard}:hover &, ${ListCard}:hover & {
    transform: scale(1.1);
  }
`;

const FallbackImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  color: #999;
  font-size: 24px;
  font-weight: 600;
`;

const ProductInfo = styled.div`
  padding: ${(props) => (props.$listView ? "0" : "16px")};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: ${(props) => (props.$listView ? "18px" : "16px")};
  color: #1a1a1a;
  font-weight: 600;
  line-height: 1.4;

  ${media.mobile} {
    font-size: 16px;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const Stars = styled.div`
  display: flex;
  gap: 2px;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => (props.$filled ? "#6ADA1B" : "#ddd")};
    color: ${(props) => (props.$filled ? "#6ADA1B" : "#ddd")};
    transition: fill 0.3s ease;
  }
`;

const ReviewCount = styled.span`
  font-size: 12px;
  color: #999;
`;

const ProductPrice = styled.div`
  color: #1a1a1a;
  font-size: ${(props) => (props.$listView ? "24px" : "20px")};
  font-weight: 700;
  margin: 8px 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;

  ${media.mobile} {
    font-size: 20px;
  }
`;

const OriginalPrice = styled.span`
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
  font-weight: normal;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px 0;
  display: ${(props) => (props.$listView ? "block" : "none")};
`;

// Updated Add to Cart Button with new style
const AddToCartButton = styled.button`
  background: transparent;
  color: #1a1a1a;
  border: none;
  border-bottom: 2px solid #6ada1b;
  border-radius: 0;
  padding: ${(props) => (props.$listView ? "10px 0" : "8px 0")};
  font-size: ${(props) => (props.$listView ? "16px" : "14px")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  width: ${(props) => (props.$listView ? "200px" : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6ada1b;
    transition: width 0.3s ease;
  }

  &:hover:not(:disabled)::after {
    width: 100%;
  }

  &:hover:not(:disabled) {
    color: #6ada1b;
  }

  &:active:not(:disabled) {
    transform: translateY(2px);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    border-bottom-color: #ccc;
  }

  svg {
    width: 16px;
    height: 16px;
    transition: stroke 0.3s ease;
  }

  &:hover:not(:disabled) svg {
    stroke: #6ada1b;
  }

  ${media.mobile} {
    width: ${(props) => (props.$listView ? "100%" : "100%")};
  }
`;

const StockStatus = styled.span`
  font-size: 12px;
  color: ${(props) => (props.$inStock ? "#6ADA1B" : "#ff4444")};
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

const ProductCard = ({ product, viewMode = "grid" }) => {
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      console.log(`Added ${product.title} to cart`);
      setIsAddingToCart(false);
    }, 500);
  };

  const toggleWishlist = (e) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const getInitials = (title) => {
    return title
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const mockRating = Math.floor(Math.random() * 5) + 1;
  const mockReviews = Math.floor(Math.random() * 100) + 10;
  const mockInStock = Math.random() > 0.2;
  const mockDescription =
    "High-quality product with premium features. Perfect for everyday use.";

  const CardComponent = viewMode === "grid" ? GridCard : ListCard;

  return (
    <CardComponent>
      {viewMode === "grid" && (
        <WishlistButton onClick={toggleWishlist} $isWishlisted={isWishlisted}>
          <Heart
            stroke={isWishlisted ? "#6ADA1B" : "#999"}
            fill={isWishlisted ? "#6ADA1B" : "none"}
          />
        </WishlistButton>
      )}

      <ImageContainer $listView={viewMode === "list"}>
        {!imageError ? (
          <ProductImage
            src={product.image}
            alt={product.title}
            loading="lazy"
            onError={() => setImageError(true)}
          />
        ) : (
          <FallbackImage>{getInitials(product.title)}</FallbackImage>
        )}
      </ImageContainer>

      <ProductInfo $listView={viewMode === "list"}>
        <ProductTitle $listView={viewMode === "list"}>
          {product.title}
        </ProductTitle>

        <RatingContainer>
          <Stars>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < mockRating ? "#6ADA1B" : "none"}
                stroke={i < mockRating ? "#6ADA1B" : "#ddd"}
              />
            ))}
          </Stars>
          <ReviewCount>({mockReviews} reviews)</ReviewCount>
        </RatingContainer>

        {viewMode === "list" && (
          <StockStatus $inStock={mockInStock}>
            {mockInStock ? "✓ In Stock" : "✕ Out of Stock"}
          </StockStatus>
        )}

        <ProductPrice $listView={viewMode === "list"}>
          ${product.price.toFixed(2)}
          {viewMode === "list" && (
            <OriginalPrice>${(product.price * 1.2).toFixed(2)}</OriginalPrice>
          )}
        </ProductPrice>

        {viewMode === "list" && (
          <Description $listView={viewMode === "list"}>
            {mockDescription}
          </Description>
        )}

        <AddToCartButton
          onClick={handleAddToCart}
          disabled={isAddingToCart || !mockInStock}
          $listView={viewMode === "list"}
        >
          <ShoppingCart size={16} />
          {isAddingToCart ? "Adding..." : "Add to Cart"}
        </AddToCartButton>
      </ProductInfo>
    </CardComponent>
  );
};

export default ProductCard;
