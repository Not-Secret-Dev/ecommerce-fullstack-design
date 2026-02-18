import React from "react";
import styled from "styled-components";

/* ─── Wrapper ─────────────────────────────────────────────────────────────── */
const OffersContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 20px auto;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ─── Left: Image panel ───────────────────────────────────────────────── */
const ImagePanel = styled.div`
  width: 220px;
  min-width: 220px;
  flex-shrink: 0;
  padding: 28px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #dee2e7;
  background: url("/Assets/Pages/Landing/Gadgets/background.png")
    no-repeat;
  background-size: cover;
  background-position: left;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    border-right: none;
    border-bottom: 1px solid #dee2e7;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    min-height: 100px;
  }
`;

const ImgPanelText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  z-index: 1;
`;

const ImgPanelTitle = styled.p`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #1c1c1c;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const SourceButton = styled.button`
  margin-top: 6px;
  align-self: flex-start;
  padding: 7px 18px;
  font-size: 13px;
  font-weight: 500;
  color: #1c1c1c;
  background: #fff;
  border: 1px solid #dee2e7;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 1;
  transition:
    background 0.18s,
    border-color 0.18s;

  &:hover {
    background: #f5f5f5;
    border-color: #b0b8c5;
  }
`;

/* ─── Right: offer cards grid ─────────────────────────────────────────────── */
const OfferItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  min-width: 0;
  align-content: stretch;

  @media (max-width: 768px) {
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 16px 12px;
    gap: 12px;
    align-items: center;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: #dee2e7;
      border-radius: 2px;
    }
  }
`;

const OfferCard = styled.div`
  flex: 0 0 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px 14px;
  border-right: 1px solid #dee2e7;
  border-bottom: 1px solid #dee2e7;
  box-sizing: border-box;
  min-width: 0;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:nth-child(4n) {
    border-right: none;
  }

  &:nth-child(n + 5) {
    border-bottom: none;
  }

  &:hover {
    background-color: #f5faff;

    img {
      transform: scale(1.06);
    }
  }

  &:active {
    background-color: #eef4ff;
  }

  @media (max-width: 768px) {
    flex: 0 0 150px;
    min-width: 150px;
    scroll-snap-align: start;
    border-right: none;
    border: 1px solid #dee2e7;
    border-radius: 6px;
    padding: 12px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
`;

const CardTitle = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #1c1c1c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardFromLabel = styled.p`
  margin: 0;
  font-size: 11px;
  color: #8b96a5;
  font-weight: 400;
`;

const CardPrice = styled.p`
  margin: 0;
  font-size: 12px;
  color: #1c1c1c;
  font-weight: 500;
`;

const OfferImage = styled.img`
  width: 68px;
  height: 68px;
  object-fit: contain;
  flex-shrink: 0;
  margin-left: 8px;
  transition: transform 0.25s ease;

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-left: 0;
  }
`;

/* ─── Component ───────────────────────────────────────────────────────────── */
const Gadgets = () => {
  const items = [
    {
      id: 1,
      title: "Smart Watches",
      image: "/Assets/Pages/Landing/Gadgets/cards/smartwatch.png",
      from: "USD 19",
    },
    {
      id: 2,
      title: "Cameras",
      image: "/Assets/Pages/Landing/Gadgets/cards/cameras.png",
      from: "USD 89",
    },
    {
      id: 3,
      title: "Headphones",
      image: "/Assets/Pages/Landing/Gadgets/cards/headphones.png",
      from: "USD 10",
    },
    {
      id: 4,
      title: "Steamers",
      image: "/Assets/Pages/Landing/Gadgets/cards/jug.png",
      from: "USD 90",
    },
    {
      id: 5,
      title: "Gaming set",
      image: "/Assets/Pages/Landing/Gadgets/cards/gaming.png",
      from: "USD 35",
    },
    {
      id: 6,
      title: "Laptops & PC",
      image: "/Assets/Pages/Landing/Gadgets/cards/laptop.png",
      from: "USD 340",
    },
    {
      id: 7,
      title: "Tablets",
      image: "/Assets/Pages/Landing/Gadgets/cards/tabs.png",
      from: "USD 19",
    },
    {
      id: 8,
      title: "Smart Phones",
      image: "/Assets/Pages/Landing/Gadgets/cards/phones.png",
      from: "USD 240",
    },
  ];

  return (
    <OffersContainer>
      <ImagePanel>
        <ImgPanelText>
          <ImgPanelTitle>Home and outdoor</ImgPanelTitle>
          <SourceButton>Source now</SourceButton>
        </ImgPanelText>
      </ImagePanel>

      <OfferItems>
        {items.map(({ id, title, image, from }) => (
          <OfferCard key={id}>
            <CardText>
              <CardTitle>{title}</CardTitle>
              <CardFromLabel>From</CardFromLabel>
              <CardPrice>{from}</CardPrice>
            </CardText>
            <OfferImage src={image} alt={title} />
          </OfferCard>
        ))}
      </OfferItems>
    </OffersContainer>
  );
};

export default Gadgets;
