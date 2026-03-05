import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 100px 5%;
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 50px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  position: relative;

  .img-container {
    overflow: hidden;
    margin-bottom: 20px;
    background: #f4f4f4;
  }

  img {
    width: 100%;
    aspect-ratio: 4/5;
    object-fit: cover;
    transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1);
  }

  .explore-link {
    display: inline-block;
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #111;
    position: relative;
    padding-bottom: 5px;

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #6ada1b;
      transition: width 0.3s ease;
    }
  }

  &:hover {
    img {
      transform: scale(1.08);
    }
    .explore-link::after {
      width: 100%;
    }
  }
`;

const Curated = () => {
  const items = [
    {
      id: "apparel-01",
      name: "Apparel",
      desc: "Timeless silhouettes",
      img: "/assets/pages/hero/shirt.jpg",
    },
    {
      id: "leather-01",
      name: "Leather Goods",
      desc: "Handcrafted precision",
      img: "/assets/pages/hero/boots.jpg",
    },
    {
      id: "beauty-01",
      name: "Beauty",
      desc: "Natural ingredients",
      img: "/assets/pages/hero/makeup.jpg",
    },
  ];

  return (
    <Section>
      <Header>
        <h2 style={{ fontSize: "2rem", fontWeight: "300" }}>
          The <b>Essentials</b>
        </h2>
        <Link
          to="/listings"
          style={{
            textDecoration: "none",
            color: "#111",
            fontSize: "0.8rem",
            fontWeight: "700",
            borderBottom: "1px solid #ddd",
          }}
        >
          VIEW ALL
        </Link>
      </Header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
        }}
      >
        {items.map((item) => (
          <CardLink key={item.id} to={`/product/${item.id}`}>
            <div className="img-container">
              <img src={item.img} alt={item.name} />
            </div>
            <h3>{item.name}</h3>
            <p style={{ color: "#666", margin: "5px 0 15px" }}>{item.desc}</p>
            <span className="explore-link">Explore</span>
          </CardLink>
        ))}
      </div>
    </Section>
  );
};

export default Curated;
