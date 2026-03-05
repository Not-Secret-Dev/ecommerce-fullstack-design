import React from "react";
import styled from "styled-components";

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  font-family: "Georgia", serif;
  background: linear-gradient(135deg, #fafaf8 0%, #f5f3f0 100%);
  color: #2a2a28;
  line-height: 1.6;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

// Header with asymmetric layout
const Header = styled.section`
  margin-bottom: 6rem;
  position: relative;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
    padding-bottom: 2rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: #6ada1b;
  }
`;

const Title = styled.h1`
  font-family: "Georgia", serif;
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  color: #1a1a18;
`;

const TitleAccent = styled.span`
  display: block;
  font-size: 0.5em;
  color: #6ada1b;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  animation: slideInLeft 0.8s ease-out 0.1s backwards;

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 3vw, 1.15rem);
  color: #666;
  max-width: 600px;
  font-weight: 300;
  line-height: 1.8;
  font-style: italic;
  animation: fadeIn 0.8s ease-out 0.2s backwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

// Content section with creative layouts
const ContentSection = styled.section`
  margin-bottom: 6rem;
  animation: fadeIn 0.8s ease-out ${(props) => props.delay || "0s"} backwards;

  @media (max-width: 768px) {
    margin-bottom: 4rem;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const SectionTitle = styled.h2`
  font-family: "Georgia", serif;
  font-size: clamp(1.4rem, 5vw, 2rem);
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  color: #1a1a18;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #6ada1b, transparent);
  }
`;

// Asymmetric layout for content
const AsymmetricContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  ${(props) =>
    props.reverse &&
    `
    @media (min-width: 769px) {
      grid-template-columns: 1.2fr 1fr;
      
      > :first-child {
        order: 2;
      }
      
      > :last-child {
        order: 1;
      }
    }
  `}
`;

const TextContent = styled.div`
  p {
    margin-bottom: 1.25rem;
    font-size: clamp(0.95rem, 2.5vw, 1.05rem);
    color: #555;
    line-height: 1.85;
    font-weight: 300;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const ImagePlaceholder = styled.div`
  background: linear-gradient(135deg, #e8dcc8 0%, #d4c4b0 100%);
  aspect-ratio: 4 / 5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 0.95rem;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.08);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 30% 30%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
    pointer-events: none;
  }
`;

// Values section with creative layout
const ValuesSection = styled.div`
  margin-top: 3rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ValueCard = styled.div`
  padding: 2rem;
  background: white;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #6ada1b;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);

    &::before {
      transform: scaleX(1);
    }
  }

  h3 {
    font-family: "Georgia", serif;
    font-size: clamp(1rem, 3vw, 1.15rem);
    font-weight: 400;
    margin-bottom: 1rem;
    color: #1a1a18;
  }

  p {
    font-size: clamp(0.9rem, 2.5vw, 0.95rem);
    color: #666;
    line-height: 1.8;
    font-weight: 300;
  }
`;

const Icon = styled.div`
  font-size: clamp(1.8rem, 5vw, 2.4rem);
  margin-bottom: 1.2rem;
  display: inline-block;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

// CTA Section with creative styling
const CTASection = styled.section`
  background: white;
  padding: 4rem 3rem;
  margin-top: 6rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2.5rem 2rem;
    margin-top: 4rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(106, 218, 27, 0.02) 0%,
      transparent 100%
    );
    pointer-events: none;
  }

  h2 {
    font-family: "Georgia", serif;
    font-size: clamp(1.4rem, 5vw, 2rem);
    font-weight: 400;
    margin-bottom: 1rem;
    color: #1a1a18;
    letter-spacing: -0.02em;
  }

  p {
    font-size: clamp(0.95rem, 2.5vw, 1.05rem);
    color: #666;
    margin-bottom: 2rem;
    font-weight: 300;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;
`;

const Button = styled.a`
  display: inline-block;
  padding: clamp(0.8rem, 2vw, 1rem) clamp(1.8rem, 4vw, 2.5rem);
  background: #6ada1b;
  color: white;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  border: 2px solid #6ada1b;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition:
      width 0.6s,
      height 0.6s;
  }

  &:hover {
    background: white;
    color: #1a1a18;
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(106, 218, 27, 0.2);

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(0);
  }

  @media (hover: none) {
    &:active {
      background: #5ac91a;
      color: white;
    }
  }
`;

export default function AboutCreative() {
  return (
    <GlobalStyle>
      <Container>
        <Header>
          <Title>
            <TitleAccent>Our Story</TitleAccent>
            Crafted with
            <br />
            Intentionality
          </Title>
          <Subtitle>
            Where elegance meets simplicity. We curate collections for those who
            believe true luxury lies in restraint.
          </Subtitle>
        </Header>

        <ContentSection delay="0.1s">
          <SectionTitle>The Beginning</SectionTitle>
          <AsymmetricContent>
            <TextContent>
              <p>
                Luxe Simplicity was born from a simple belief: that true luxury
                lies in restraint. Founded in 2020, we set out to create a brand
                that celebrates the art of curated design.
              </p>
              <p>
                Every item tells a story of craftsmanship, thoughtfulness, and
                an unwavering commitment to quality. We believe that owning
                less, but better, is the path to a more meaningful life.
              </p>
            </TextContent>
            <ImagePlaceholder>[Image: Curated Collection]</ImagePlaceholder>
          </AsymmetricContent>
        </ContentSection>

        <ContentSection delay="0.2s">
          <SectionTitle>Our Philosophy</SectionTitle>
          <AsymmetricContent reverse>
            <TextContent>
              <p>
                We believe in the power of intentional design. Every product is
                thoughtfully selected to meet rigorous standards for quality,
                aesthetics, and functionality.
              </p>
              <p>
                Sustainability, ethical production, and timeless design are at
                the heart of everything we do. We're not chasing trends—we're
                creating pieces that remain beautiful for years to come.
              </p>
            </TextContent>
            <ImagePlaceholder>[Image: Artisan Craftsmanship]</ImagePlaceholder>
          </AsymmetricContent>
        </ContentSection>

        <ContentSection delay="0.3s">
          <ValuesSection>
            <SectionTitle>Our Values</SectionTitle>
            <ValuesGrid>
              <ValueCard>
                <Icon>✨</Icon>
                <h3>Curated Excellence</h3>
                <p>
                  Every piece hand-selected for exceptional quality and timeless
                  design.
                </p>
              </ValueCard>
              <ValueCard>
                <Icon>🌿</Icon>
                <h3>Sustainable Choices</h3>
                <p>
                  Committed to ethical production and environmental
                  responsibility.
                </p>
              </ValueCard>
              <ValueCard>
                <Icon>🤝</Icon>
                <h3>Artisan Partnership</h3>
                <p>
                  Supporting independent makers and celebrating their craft.
                </p>
              </ValueCard>
            </ValuesGrid>
          </ValuesSection>
        </ContentSection>

        <CTASection>
          <CTAContent>
            <h2>Ready to Embrace Luxe Simplicity?</h2>
            <p>
              Explore our thoughtfully curated collections and discover pieces
              that inspire and endure.
            </p>
            <Button href="#shop">Explore Collection</Button>
          </CTAContent>
        </CTASection>
      </Container>
    </GlobalStyle>
  );
}
