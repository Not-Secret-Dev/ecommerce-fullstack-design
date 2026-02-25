import React, { useState } from "react";
import styled from "styled-components";

const breakpoints = {
  mobile: "600px",
  tablet: "900px",
};

const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  background-color: #f4f4f4;
  width: 100%;
  box-sizing: border-box;
`;

const NewsletterCard = styled.div`
  background-color: #111;
  color: #fff;
  padding: 40px 20px; /* Reduced side padding for mobile */
  border-radius: 24px;
  width: 100%;
  max-width: 600px; /* Brought down from 800px for a tighter look */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 60px;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 12px;
  font-weight: 700;

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 2.4rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 30px;
  max-width: 450px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px; /* Space between input and button on mobile */
  width: 100%;
  max-width: 450px;

  @media (min-width: ${breakpoints.mobile}) {
    flex-direction: row;
    gap: 0; /* Remove gap when they are joined */
  }
`;

const Input = styled.input`
  padding: 18px 24px;
  border-radius: 40px; /* Full round on mobile */
  border: none;
  font-size: 1rem;
  width: 100%;
  outline: none;
  box-sizing: border-box;

  @media (min-width: ${breakpoints.mobile}) {
    /* Only flatten the right side on desktop */
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex: 1;
  }
`;

const SubscribeButton = styled.button`
  background-color: #6ada1b;
  color: #000;
  padding: 18px 32px;
  border-radius: 40px; /* Full round on mobile */
  border: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #fff;
    transform: translateY(-2px);
  }

  @media (min-width: ${breakpoints.mobile}) {
    /* Only flatten the left side on desktop */
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: auto;
  }
`;

const Message = styled.p`
  margin-top: 15px;
  font-size: 0.9rem;
  color: #6ada1b;
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus("Vielen Dank! You've been subscribed.");
      setEmail("");
    }
  };

  return (
    <SectionContainer>
      <NewsletterCard>
        <Title>Join the Club</Title>
        <Description>
          Subscribe to receive updates on new collections, exclusive events, and
          our journey toward sustainable fashion.
        </Description>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <SubscribeButton type="submit">Subscribe</SubscribeButton>
        </Form>
        {status && <Message>{status}</Message>}
      </NewsletterCard>
    </SectionContainer>
  );
};

export default Newsletter;
