import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 20px auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: "DM Sans", sans-serif;

  @media (min-width: 1180px) {
    padding: 0;
  }
`;

const SectionHeading = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin: 0 0 16px 0;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  overflow: hidden;

  /* Desktop: 4 columns */
  grid-template-columns: repeat(4, 1fr);

  /* Tablet: 2 columns */
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile: 1 column */
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  height: 256px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  cursor: pointer;
  transition: box-shadow 0.2s ease;
  background: #fff;
  overflow: hidden;

  /* Desktop: right border on all but last */
  border-right: 1px solid #dee2e7;
  &:last-child {
    border-right: none;
  }

  /* Tablet: 2-col grid — remove right border on even cards, add bottom border on all but last two */
  @media (max-width: 768px) {
    border-right: 1px solid #dee2e7;
    border-bottom: 1px solid #dee2e7;

    &:nth-child(2n) {
      border-right: none;
    }
    &:nth-last-child(-n + 2) {
      border-bottom: none;
    }
  }

  /* Mobile: 1-col — no right border, bottom border on all but last */
  @media (max-width: 480px) {
    border-right: none;
    border-bottom: 1px solid #dee2e7;

    &:last-child {
      border-bottom: none;
    }
  }

  &:hover {
    box-shadow: inset 0 0 0 1px #2c7cf1;
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const ImageSection = styled.div`
  position: relative;
  width: 100%;
  height: 160px;
  flex-shrink: 0;
  overflow: hidden;
  background: #e8eaed;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 148px;
  }

  @media (max-width: 480px) {
    height: 136px;
  }
`;

const IconBadge = styled.div`
  position: absolute;
  bottom: -20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f0f1f3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  z-index: 2;
`;

const TextSection = styled.div`
  flex: 1;
  padding: 28px 16px 16px;
  background: #fff;
  display: flex;
  align-items: flex-start;
`;

const CardTitle = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.1px;
  color: #1c1c1c;
  margin: 0;
`;

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CustomizeIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);

const ShippingIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const InspectionIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#444"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const services = [
  {
    id: 1,
    title: "Source from Industry Hubs",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    icon: <SearchIcon />,
  },
  {
    id: 2,
    title: "Customize Your Products",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    icon: <CustomizeIcon />,
  },
  {
    id: 3,
    title: "Fast, reliable shipping by ocean or air",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
    icon: <ShippingIcon />,
  },
  {
    id: 4,
    title: "Product monitoring and inspection",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=400&fit=crop",
    icon: <InspectionIcon />,
  },
];

const ExtraServices = () => (
  <>
    <GlobalFonts />
    <MainContainer>
      <SectionHeading>Our extra services</SectionHeading>
      <Grid>
        {services.map((service) => (
          <Card key={service.id}>
            <ImageSection>
              <img src={service.image} alt={service.title} />
              <IconBadge>{service.icon}</IconBadge>
            </ImageSection>
            <TextSection>
              <CardTitle>{service.title}</CardTitle>
            </TextSection>
          </Card>
        ))}
      </Grid>
    </MainContainer>
  </>
);

export default ExtraServices;
