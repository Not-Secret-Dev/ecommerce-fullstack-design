import React from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 12px auto;
  font-family: "DM Sans", sans-serif;
  box-sizing: border-box;
  padding: 0 16px;

  @media (min-width: 1180px) {
    padding: 0;
  }
`;

const Heading = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  margin-bottom: 16px;
  color: #1c1c1c;

  @media (max-width: 640px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  gap: 16px;

  /* Desktop: 4 columns */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet: 3 columns */
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* Large mobile: 2 columns */
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 6px 6px 0 0;
  overflow: hidden;
  background: #f7f8fa;
  flex-shrink: 0;
  position: relative;
  aspect-ratio: 1 / 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
    padding: 12px;
    box-sizing: border-box;

    @media (max-width: 640px) {
      padding: 16px;
    }
  }
`;

const ProductCard = styled.div`
  width: 100%;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: ${({ $index }) => $index * 60}ms;

  /* Desktop: no border */
  gap: 10px;

  &:hover ${ImageWrapper} img {
    transform: scale(1.05);
  }

  /* Mobile: card style with border */
  @media (max-width: 640px) {
    border: 1.5px solid #e8e8e8;
    border-radius: 10px;
    overflow: hidden;
    gap: 0;
    background: #fff;

    &:hover {
      border-color: #2c7cf1;
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0 2px;

  @media (max-width: 640px) {
    padding: 10px 12px 14px;
    gap: 3px;
  }
`;

const ProductName = styled.p`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #606060;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 640px) {
    font-size: 13px;
    line-height: 18px;
    white-space: normal;
    overflow: visible;
    text-overflow: unset;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ProductMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }
`;

const Price = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #1c1c1c;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

const Rating = styled.span`
  font-size: 12px;
  color: #f5a623;
  letter-spacing: 1px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const RatingCount = styled.span`
  font-size: 11px;
  color: #999;
  margin-left: 4px;

  @media (max-width: 640px) {
    display: none;
  }
`;

const Badge = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  font-family: "Sora", sans-serif;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  padding: 2px 7px;
  border-radius: 4px;
  background: ${({ $type }) =>
    $type === "sale" ? "#fff0f0" : $type === "new" ? "#edf7ff" : "#f0fff4"};
  color: ${({ $type }) =>
    $type === "sale" ? "#e74c3c" : $type === "new" ? "#2c7cf1" : "#27ae60"};
  width: fit-content;

  @media (max-width: 640px) {
    display: none;
  }
`;

const AddToCartBtn = styled.button`
  width: 100%;
  height: 34px;
  border-radius: 6px;
  border: 1.5px solid #dee2e7;
  background: white;
  font-family: "DM Sans", sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #2c7cf1;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    border-color 0.18s;
  letter-spacing: 0.1px;

  &:hover {
    background: #2c7cf1;
    color: white;
    border-color: #2c7cf1;
  }

  /* Hidden on mobile — not shown in screenshot */
  @media (max-width: 640px) {
    display: none;
  }
`;

const products = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: "$24.00",
    badge: "new",
    rating: 4,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Gaming Mechanical Keyboard",
    price: "$89.00",
    badge: "hot",
    rating: 5,
    reviews: 540,
    image:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    name: '27" 4K Gaming Monitor',
    price: "$349.00",
    badge: "sale",
    rating: 5,
    reviews: 198,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    price: "$55.00",
    badge: "new",
    rating: 4,
    reviews: 87,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    name: "Slim Fit Chino Pants",
    price: "$38.00",
    badge: "sale",
    rating: 4,
    reviews: 224,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    name: "RGB Gaming Headset",
    price: "$65.00",
    badge: "hot",
    rating: 5,
    reviews: 410,
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop",
  },
  {
    id: 7,
    name: "Gaming PC Tower RTX 4070",
    price: "$1,299.00",
    badge: "new",
    rating: 5,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=300&h=300&fit=crop",
  },
  {
    id: 8,
    name: "Canvas Backpack 30L",
    price: "$42.00",
    badge: "sale",
    rating: 4,
    reviews: 163,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
  },
];

const Stars = ({ count }) => "★".repeat(count) + "☆".repeat(5 - count);

const Recommended = () => (
  <>
    <GlobalFonts />
    <MainContainer>
      <Heading>Recommended for you</Heading>
      <ProductGrid>
        {products.map((product, i) => (
          <ProductCard key={`${product.id}-${i}`} $index={i}>
            <ImageWrapper>
              <img src={product.image} alt={product.name} />
            </ImageWrapper>
            <ProductInfo>
              <Badge $type={product.badge}>{product.badge}</Badge>
              <ProductMeta>
                <Price>{product.price}</Price>
                <div>
                  <Rating>
                    <Stars count={product.rating} />
                  </Rating>
                  <RatingCount>({product.reviews})</RatingCount>
                </div>
              </ProductMeta>
              <ProductName>{product.name}</ProductName>
            </ProductInfo>
            <AddToCartBtn>Add to cart</AddToCartBtn>
          </ProductCard>
        ))}
      </ProductGrid>
    </MainContainer>
  </>
);

export default Recommended;
