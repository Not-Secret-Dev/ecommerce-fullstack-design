import React from "react";
import styled from "styled-components";

const breakpoints = {
  mobile: "576px",
  tablet: "768px",
  desktop: "1024px",
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  box-sizing: border-box;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  padding-bottom: 30px;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  button {
    border: none;
    padding: 8px 0;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: transparent;
    border-bottom: 2px solid #5cb311;
    transition: color 0.3s ease;

    &:hover {
      color: #5cb311;
    }
  }
`;

const Title = styled.h2`
  margin: 0;
  color: #6ada1b;
  font-size: 1rem;
  line-height: 1.2;
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    font-weight: 700;
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    color: #111111;
    display: block;
    margin-top: 5px;
    text-transform: none;
    letter-spacing: -0.5px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background-color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 20px;
    background-color: #f3f3f3;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: #111;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin-bottom: 20px;
    flex-grow: 1;
  }

  button {
    align-self: flex-start;
    border: none;
    padding: 5px 0;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 600;
    background-color: transparent;
    border-bottom: 2px solid #5cb311;
    transition: letter-spacing 0.3s ease;

    &:hover {
      letter-spacing: 1px;
    }
  }
`;

const Curated = () => {
  const products = [
    {
      id: 1,
      name: "Apparel",
      description: "Timeless silhouettes for the modern frame.",
      image: "/assets/pages/hero/shirt.jpg",
    },
    {
      id: 2,
      name: "Leather Goods",
      description: "Handcrafted precision in every stitch.",
      image: "/assets/pages/hero/boots.jpg",
    },
    {
      id: 3,
      name: "Beauty",
      description: "Natural ingredients for radiant skin.",
      image: "/assets/pages/hero/makeup.jpg",
    },
  ];

  return (
    <MainContainer>
      <Navbar>
        <Title>
          Curated <br /> <span>The Essentials</span>
        </Title>
        <button aria-label="View all product categories">
          View All Categories
        </button>
      </Navbar>
      <CardsContainer>
        {products.map((product) => (
          <Card key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button aria-label={`Explore ${product.name}`}>Explore</button>
          </Card>
        ))}
      </CardsContainer>
    </MainContainer>
  );
};

export default Curated;
