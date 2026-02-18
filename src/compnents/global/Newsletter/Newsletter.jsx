import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
`;

const Wrapper = styled.section`
  width: 100%;
  background: #f7f8fa;
  padding: 48px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-family: "DM Sans", sans-serif;
`;

const Title = styled.h2`
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.2px;
  color: #1c1c1c;
  margin: 0 0 4px 0;
  text-align: center;
`;

const Subtitle = styled.p`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #606060;
  margin: 0 0 20px 0;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
  max-width: 480px;
`;

const EmailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#8b96a5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
);

const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  height: 44px;
  border: 1.5px solid #dee2e7;
  border-right: none;
  border-radius: 7px 0 0 7px;
  padding: 0 14px;
  background: #fff;
  box-sizing: border-box;
  transition: border-color 0.18s;

  &:focus-within {
    border-color: #2c7cf1;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  color: #333;
  background: transparent;

  &::placeholder {
    color: #adb5bd;
  }
`;

const SubscribeBtn = styled.button`
  height: 44px;
  padding: 0 22px;
  background: #2c7cf1;
  color: #fff;
  border: none;
  border-radius: 0 7px 7px 0;
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 0.18s,
    transform 0.12s;

  &:hover {
    background: #1a6de0;
    transform: translateX(1px);
  }

  &:active {
    transform: translateX(0);
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <>
      <GlobalFonts />
      <Wrapper>
        <Title>Subscribe on our newsletter</Title>
        <Subtitle>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </Subtitle>
        <Form>
          <InputWrapper>
            <EmailIcon />
            <EmailInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <SubscribeBtn onClick={() => email && alert(`Subscribed: ${email}`)}>
            Subscribe
          </SubscribeBtn>
        </Form>
      </Wrapper>
    </>
  );
};

export default Newsletter;
