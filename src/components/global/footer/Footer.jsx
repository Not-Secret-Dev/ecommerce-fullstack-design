import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link for routing

const breakpoints = {
  mobile: "600px",
  tablet: "900px",
};

const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 60px 20px 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: auto;
`;

const FooterGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${breakpoints.tablet}) {
    grid-template-columns: 2fr 1fr 1fr 1.5fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Logo = styled(Link)`
  // Changed to Link
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  text-decoration: none; // Remove default link styling

  span {
    color: #6ada1b;
  }
`;

const ColumnTitle = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 5px;
  color: #6ada1b;
`;

const FooterLink = styled(Link)`
  // Changed to Link
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #6ada1b; // Using your signature green for hover
  }
`;

// Separate style for external social links
const ExternalLink = styled.a`
  color: #ccc;
  text-decoration: none;
  font-size: 0.8rem;
  transition: color 0.3s ease;

  &:hover {
    color: #fff;
  }
`;

const CopyrightSection = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const BottomText = styled.p`
  font-size: 0.8rem;
  color: #666;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <Logo to="/">
            LUXE<span>.</span>
          </Logo>
          <BottomText style={{ maxWidth: "250px" }}>
            Elevating everyday essentials through sustainable design and
            architectural precision.
          </BottomText>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Shop</ColumnTitle>
          <FooterLink to="/listings">All Collections</FooterLink>
          <FooterLink to="/listings">Apparel</FooterLink>
          <FooterLink to="/listings">Leather Goods</FooterLink>
          <FooterLink to="/listings">Beauty</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Support</ColumnTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/shipping">Shipping & Returns</FooterLink>
          <FooterLink to="/faq">FAQs</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Legal (Germany)</ColumnTitle>
          <FooterLink to="/impressum">Impressum</FooterLink>
          <FooterLink to="/privacy">Datenschutz</FooterLink>
          <FooterLink to="/tos">Terms of Service</FooterLink>
        </FooterColumn>
      </FooterGrid>

      <CopyrightSection>
        <BottomText>
          © {currentYear} Luxe Simplicity. Developed by Aayan Mumtaz.
        </BottomText>
        <div style={{ display: "flex", gap: "20px" }}>
          <ExternalLink
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </ExternalLink>
          <ExternalLink
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </ExternalLink>
          <ExternalLink
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </ExternalLink>
        </div>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
