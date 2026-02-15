import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
`;

/* ── Icons ── */
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff" />
  </svg>
);
const BagIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#fff"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const AppleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);
const GooglePlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
  </svg>
);

/* ── Styled Components ── */
const FooterWrapper = styled.footer`
  width: 100%;
  background: #fff;
  font-family: "DM Sans", sans-serif;
`;

const FooterMain = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 40px 16px 32px;
  box-sizing: border-box;
  display: flex;
  gap: 40px;

  @media (min-width: 1180px) {
    padding: 40px 0 32px;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 32px;
  }
`;

const BrandCol = styled.div`
  width: 220px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LogoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoBadge = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: #2c7cf1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const BrandName = styled.span`
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 22px;
  color: #2c7cf1;
`;

const BrandDesc = styled.p`
  font-size: 14px;
  line-height: 21px;
  color: #606060;
  margin: 0;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

const SocialBtn = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #606060;
  cursor: pointer;
  text-decoration: none;
  transition:
    background 0.18s,
    color 0.18s;

  &:hover {
    background: #2c7cf1;
    color: #fff;
  }
`;

const LinksGrid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const LinkCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColTitle = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #1c1c1c;
  margin: 0 0 4px 0;
`;

const ColLink = styled.a`
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: #8b96a5;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.15s;

  &:hover {
    color: #2c7cf1;
  }
`;

const AppCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AppColTitle = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #1c1c1c;
  margin: 0 0 4px 0;
`;

const AppBadge = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #1c1c1c;
  color: #fff;
  border-radius: 8px;
  padding: 10px 16px;
  text-decoration: none;
  cursor: pointer;
  width: 160px;
  box-sizing: border-box;
  transition: background 0.18s;

  &:hover {
    background: #333;
  }
`;

const AppBadgeText = styled.div`
  display: flex;
  flex-direction: column;
`;

const AppBadgeLabel = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1;
`;

const AppBadgeName = styled.span`
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.4;
`;

const FooterBottom = styled.div`
  width: 100%;
  background: #f0f2f5;
  padding: 16px 0;
`;

const BottomInner = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1180px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const Copyright = styled.span`
  font-size: 13px;
  color: #8b96a5;
`;

const LangSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 13px;
  color: #1c1c1c;
  font-weight: 500;
`;

const Footer = () => (
  <>
    <GlobalFonts />
    <FooterWrapper>
      <FooterMain>
        {/* Brand */}
        <BrandCol>
          <LogoRow>
            <LogoBadge>
              <BagIcon />
            </LogoBadge>
            <BrandName>Brand</BrandName>
          </LogoRow>
          <BrandDesc>
            Best information about the company gies here but now lorem ipsum is
          </BrandDesc>
          <SocialRow>
            <SocialBtn href="#">
              <FacebookIcon />
            </SocialBtn>
            <SocialBtn href="#">
              <TwitterIcon />
            </SocialBtn>
            <SocialBtn href="#">
              <LinkedInIcon />
            </SocialBtn>
            <SocialBtn href="#">
              <InstagramIcon />
            </SocialBtn>
            <SocialBtn href="#">
              <YoutubeIcon />
            </SocialBtn>
          </SocialRow>
        </BrandCol>

        {/* Nav Links */}
        <LinksGrid>
          <LinkCol>
            <ColTitle>About</ColTitle>
            <ColLink href="#">About Us</ColLink>
            <ColLink href="#">Find store</ColLink>
            <ColLink href="#">Categories</ColLink>
            <ColLink href="#">Blogs</ColLink>
          </LinkCol>
          <LinkCol>
            <ColTitle>Partnership</ColTitle>
            <ColLink href="#">About Us</ColLink>
            <ColLink href="#">Find store</ColLink>
            <ColLink href="#">Categories</ColLink>
            <ColLink href="#">Blogs</ColLink>
          </LinkCol>
          <LinkCol>
            <ColTitle>Information</ColTitle>
            <ColLink href="#">Help Center</ColLink>
            <ColLink href="#">Money Refund</ColLink>
            <ColLink href="#">Shipping</ColLink>
            <ColLink href="#">Contact us</ColLink>
          </LinkCol>
          <LinkCol>
            <ColTitle>For users</ColTitle>
            <ColLink href="#">Login</ColLink>
            <ColLink href="#">Register</ColLink>
            <ColLink href="#">Settings</ColLink>
            <ColLink href="#">My Orders</ColLink>
          </LinkCol>
        </LinksGrid>

        {/* Get App */}
        <AppCol>
          <AppColTitle>Get app</AppColTitle>
          <AppBadge href="#">
            <AppleIcon />
            <AppBadgeText>
              <AppBadgeLabel>Download on the</AppBadgeLabel>
              <AppBadgeName>App Store</AppBadgeName>
            </AppBadgeText>
          </AppBadge>
          <AppBadge href="#">
            <GooglePlayIcon />
            <AppBadgeText>
              <AppBadgeLabel>GET IT ON</AppBadgeLabel>
              <AppBadgeName>Google Play</AppBadgeName>
            </AppBadgeText>
          </AppBadge>
        </AppCol>
      </FooterMain>

      {/* Bottom bar */}
      <FooterBottom>
        <BottomInner>
          <Copyright>© 2023 Ecommerce.</Copyright>
          <LangSelector>
            <img
              src="https://flagcdn.com/w20/us.png"
              alt="US"
              style={{ width: 20, height: 14, borderRadius: 2 }}
            />
            English
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </LangSelector>
        </BottomInner>
      </FooterBottom>
    </FooterWrapper>
  </>
);

export default Footer;
