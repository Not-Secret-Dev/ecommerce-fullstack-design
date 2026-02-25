import React from "react";
import styled from "styled-components";

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

const Logo = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #fff;

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

const FooterLink = styled.a`
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  cursor: pointer;

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
          <Logo>
            LUXE<span>.</span>
          </Logo>
          <BottomText style={{ maxWidth: "250px" }}>
            Elevating everyday essentials through sustainable design and
            architectural precision.
          </BottomText>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Shop</ColumnTitle>
          <FooterLink>All Collections</FooterLink>
          <FooterLink>Apparel</FooterLink>
          <FooterLink>Leather Goods</FooterLink>
          <FooterLink>Beauty</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Support</ColumnTitle>
          <FooterLink>Contact Us</FooterLink>
          <FooterLink>Shipping & Returns</FooterLink>
          <FooterLink>Size Guide</FooterLink>
          <FooterLink>FAQs</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <ColumnTitle>Legal (Germany)</ColumnTitle>
          <FooterLink>Impressum</FooterLink>
          <FooterLink>Datenschutz (Privacy)</FooterLink>
          <FooterLink>Terms of Service</FooterLink>
          <FooterLink>Cookie Settings</FooterLink>
        </FooterColumn>
      </FooterGrid>

      <CopyrightSection>
        <BottomText>
          © {currentYear} Simplicity. Developed by Aayan Mumtaz.
        </BottomText>
        <div style={{ display: "flex", gap: "20px" }}>
          <FooterLink style={{ fontSize: "0.8rem" }}>Instagram</FooterLink>
          <FooterLink style={{ fontSize: "0.8rem" }}>LinkedIn</FooterLink>
          <FooterLink style={{ fontSize: "0.8rem" }}>GitHub</FooterLink>
        </div>
      </CopyrightSection>
    </FooterContainer>
  );
};

export default Footer;
