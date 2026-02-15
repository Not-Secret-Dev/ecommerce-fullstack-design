import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 24px auto;
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
  margin: 0 0 20px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 20px;
  column-gap: 0;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CountryItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  padding: 4px 0;

  &:hover span {
    color: #2c7cf1;
  }
`;

const FlagWrapper = styled.div`
  width: 32px;
  height: 24px;
  border-radius: 3px;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid #f0f0f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const CountryName = styled.span`
  font-family: "DM Sans", sans-serif;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: #1c1c1c;
  transition: color 0.15s;
`;

const CountryUrl = styled.span`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #8b96a5;
`;

const countries = [
  {
    name: "Arabic Emirates",
    url: "shopname.ae",
    flag: "https://flagcdn.com/w40/ae.png",
  },
  {
    name: "Australia",
    url: "shopname.ae",
    flag: "https://flagcdn.com/w40/au.png",
  },
  {
    name: "United States",
    url: "shopname.ae",
    flag: "https://flagcdn.com/w40/us.png",
  },
  {
    name: "Russia",
    url: "shopname.ru",
    flag: "https://flagcdn.com/w40/ru.png",
  },
  { name: "Italy", url: "shopname.it", flag: "https://flagcdn.com/w40/it.png" },
  {
    name: "Denmark",
    url: "denmark.com.dk",
    flag: "https://flagcdn.com/w40/dk.png",
  },
  {
    name: "France",
    url: "shopname.com.fr",
    flag: "https://flagcdn.com/w40/fr.png",
  },
  {
    name: "Arabic Emirates",
    url: "shopname.ae",
    flag: "https://flagcdn.com/w40/ae.png",
  },
  { name: "China", url: "shopname.ae", flag: "https://flagcdn.com/w40/cn.png" },
  {
    name: "Great Britain",
    url: "shopname.co.uk",
    flag: "https://flagcdn.com/w40/gb.png",
  },
];

const SuppliersByRegion = () => (
  <>
    <GlobalFonts />
    <MainContainer>
      <SectionHeading>Suppliers by region</SectionHeading>
      <Grid>
        {countries.map((country, i) => (
          <CountryItem key={i}>
            <FlagWrapper>
              <img src={country.flag} alt={country.name} />
            </FlagWrapper>
            <CountryInfo>
              <CountryName>{country.name}</CountryName>
              <CountryUrl>{country.url}</CountryUrl>
            </CountryInfo>
          </CountryItem>
        ))}
      </Grid>
    </MainContainer>
  </>
);

export default SuppliersByRegion;
