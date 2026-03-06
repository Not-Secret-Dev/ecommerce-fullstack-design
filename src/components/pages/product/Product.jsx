import React, { useState } from "react";
import styled from "styled-components";

const DetailLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

const Gallery = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  .main-img {
    aspect-ratio: 3/4;
    background: #f7f7f7;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StickySidebar = styled.aside`
  position: sticky;
  top: 40px;
  height: fit-content;

  h1 {
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 10px 0;
  }
  .price {
    font-size: 18px;
    margin-bottom: 30px;
  }
  @media (max-width: 900px) {
    position: static;
  }
`;

const ControlGroup = styled.div`
  margin-bottom: 24px;
  label {
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: block;
    margin-bottom: 12px;
  }
`;

const SizeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const Button = styled.button`
  width: 100%;
  height: 54px;
  background: ${(props) => (props.primary ? "#111" : "none")};
  color: ${(props) => (props.primary ? "#fff" : "#111")};
  border: ${(props) => (props.primary ? "none" : "1px solid #eee")};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: ${(props) => (props.primary ? "20px" : "10px")};
  &:hover {
    background: ${(props) => (props.primary ? "#6ada1b" : "#f9f9f9")};
  }
`;

export default function ProductDetail() {
  const [size, setSize] = useState("M");
  return (
    <DetailLayout>
      <Gallery>
        <div className="main-img">[Product View 01]</div>
        <div className="main-img">[Product View 02]</div>
      </Gallery>
      <StickySidebar>
        <span>Season 26 / Essentials</span>
        <h1>Premium Wool Overcoat</h1>
        <div className="price">$299.00</div>

        <ControlGroup>
          <label>Select Size</label>
          <SizeGrid>
            {["S", "M", "L", "XL"].map((s) => (
              <button
                key={s}
                style={{
                  height: "40px",
                  border: size === s ? "1px solid #111" : "1px solid #eee",
                  background: size === s ? "#111" : "#fff",
                  color: size === s ? "#fff" : "#111",
                  cursor: "pointer",
                }}
                onClick={() => setSize(s)}
              >
                {s}
              </button>
            ))}
          </SizeGrid>
        </ControlGroup>

        <Button primary>Add to Bag</Button>
        <Button>Save to Wishlist</Button>

        <div
          style={{
            marginTop: "40px",
            fontSize: "12px",
            color: "#888",
            lineHeight: "1.6",
          }}
        >
          Free express shipping on orders over $200. Crafted from 100% Merino
          wool.
        </div>
      </StickySidebar>
    </DetailLayout>
  );
}
