import React, { useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  height: auto;
  min-height: 400px;
  margin: 20px auto;
  padding: 20px;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 10px;
    min-height: auto;
  }
`;

const LeftContainer = styled.div`
  width: 20%;
  height: 360px;
  flex-shrink: 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CategoryItem = styled.li`
  background-color: ${(props) => (props.$isActive ? "#e5f1ff" : "transparent")};
  color: ${(props) => (props.$isActive ? "#1c1c1c" : "#505050")};

  &:hover {
    background-color: #e5f1ff;
  }
`;

const CenterContainer = styled.div`
  width: 60%;
  height: 360px;
  margin: 0 15px;
  background-image: url("/public/Assets/Pages/Landing/Hero/Hero.png");
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  flex-shrink: 0;

  div {
    margin-left: 35px;
    margin-top: 53px;
  }

  p {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 28px;
    margin: 0;
    line-height: 1.2;
  }

  p:nth-child(2) {
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 32px;
    margin-top: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
    height: 300px;

    div {
      margin-left: 25px;
      margin-top: 40px;
    }

    p {
      font-size: 22px;
    }

    p:nth-child(2) {
      font-size: 26px;
    }
  }

  @media (max-width: 480px) {
    height: 250px;

    div {
      margin-left: 20px;
      margin-top: 30px;
    }

    p {
      font-size: 18px;
    }

    p:nth-child(2) {
      font-size: 22px;
    }
  }
`;

const RightContainer = styled.div`
  width: 20%;
  height: 360px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const UserBlock = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px 10px;
  background-color: #e3f0ff;
  border-radius: 6px;
  box-sizing: border-box;
  overflow: hidden;

  img {
    width: 29px;
    height: 34px;
  }
`;

const UserImageGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
  }
`;

const UserImage = styled.div`
  width: 44px;
  height: 44px;
  background-color: #abcaff;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
`;

const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  margin-top: 15px;
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;

  button {
    width: 100%;
    height: 35px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 14px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    transition: all 0.2s ease;
  }
`;

const JoinButton = styled.button`
  background: ${(props) =>
    props.$isActive
      ? "linear-gradient(180deg, #0056CC 0%, #004BB8 100%)"
      : props.$isHovered
        ? "linear-gradient(180deg, #0D6FE8 0%, #005FE6 100%)"
        : "linear-gradient(180deg, #127fff 0%, #0067ff 100%)"};
  color: #fff;
  transform: ${(props) => (props.$isActive ? "scale(0.98)" : "scale(1)")};
`;

const LoginButton = styled.button`
  background-color: ${(props) =>
    props.$isActive ? "#f0f0f0" : props.$isHovered ? "#f8f9fa" : "#fff"};
  border: 1px solid #dee2e7;
  color: ${(props) =>
    props.$isActive ? "#004BB8" : props.$isHovered ? "#0056CC" : "#0d6efd"};
  transform: ${(props) => (props.$isActive ? "scale(0.98)" : "scale(1)")};
`;

const LearnMoreButton = styled.button`
  background-color: ${(props) =>
    props.$isActive ? "#e6e6e6" : props.$isHovered ? "#f5f5f5" : "#fff"};
  color: #1c1c1c;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 35px;
  font-family: Inter, sans-serif;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  width: fit-content;
  display: inline-block;
  transition: all 0.2s ease;
  transform: ${(props) => (props.$isActive ? "scale(0.98)" : "scale(1)")};

  @media (max-width: 768px) {
    margin-left: 25px;
    margin-top: 15px;
    font-size: 14px;
    padding: 8px 14px;
  }

  @media (max-width: 480px) {
    margin-left: 20px;
    margin-top: 12px;
    font-size: 13px;
    padding: 8px 12px;
  }
`;

const CardsBlock = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
  flex: 1;
`;

const Card = styled.div`
  width: 100%;
  height: 87.5px;
  border-radius: 6px;
  color: white;
  display: flex;
  align-items: center;
  font-family: Inter, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  box-sizing: border-box;

  p {
    margin: 20px;
    width: 60%;
  }
`;

const Hero = () => {
  const [joinHovered, setJoinHovered] = useState(false);
  const [joinActive, setJoinActive] = useState(false);
  const [loginHovered, setLoginHovered] = useState(false);
  const [loginActive, setLoginActive] = useState(false);
  const [learnHovered, setLearnHovered] = useState(false);
  const [learnActive, setLearnActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer & tech",
    "Tools, equipment",
    "Sports & outdoor",
    "Animals & pets",
    "Machinery tools",
    "More category",
  ];

  return (
    <MainContainer>
      <LeftContainer>
        <ul>
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              $isActive={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            >
              {category}
            </CategoryItem>
          ))}
        </ul>
      </LeftContainer>
      <CenterContainer>
        <div>
          <p>Latest trending</p>
          <p>Electronic Items</p>
        </div>
        <LearnMoreButton
          $isHovered={learnHovered}
          $isActive={learnActive}
          onMouseEnter={() => setLearnHovered(true)}
          onMouseLeave={() => {
            setLearnHovered(false);
            setLearnActive(false);
          }}
          onMouseDown={() => setLearnActive(true)}
          onMouseUp={() => setLearnActive(false)}
        >
          Learn more
        </LearnMoreButton>
      </CenterContainer>
      <RightContainer>
        <UserBlock>
          <UserImageGroup>
            <UserImage>
              <img
                src="/public/Assets/Pages/Landing/Hero/avatar.png"
                alt="User"
              />
            </UserImage>
            <span>
              Hi, user <br /> Let's get started
            </span>
          </UserImageGroup>
          <ButtonsGroup>
            <JoinButton
              $isHovered={joinHovered}
              $isActive={joinActive}
              onMouseEnter={() => setJoinHovered(true)}
              onMouseLeave={() => {
                setJoinHovered(false);
                setJoinActive(false);
              }}
              onMouseDown={() => setJoinActive(true)}
              onMouseUp={() => setJoinActive(false)}
            >
              Join now
            </JoinButton>
            <LoginButton
              $isHovered={loginHovered}
              $isActive={loginActive}
              onMouseEnter={() => setLoginHovered(true)}
              onMouseLeave={() => {
                setLoginHovered(false);
                setLoginActive(false);
              }}
              onMouseDown={() => setLoginActive(true)}
              onMouseUp={() => setLoginActive(false)}
            >
              Log in
            </LoginButton>
          </ButtonsGroup>
        </UserBlock>
        <CardsBlock>
          <Card style={{ backgroundColor: "#F38332" }}>
            <p>Get US $10 off with a new supplier</p>
          </Card>
          <Card style={{ backgroundColor: "#55BDC3" }}>
            <p>Send quotes with supplier preferences</p>
          </Card>
        </CardsBlock>
      </RightContainer>
    </MainContainer>
  );
};

export default Hero;
