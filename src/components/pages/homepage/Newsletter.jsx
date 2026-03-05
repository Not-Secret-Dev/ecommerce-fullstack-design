import React from "react";
import styled from "styled-components";

const FooterSection = styled.section`
  padding: 120px 5%;
  text-align: center;
  background: #fff;
`;

const FormContainer = styled.form`
  max-width: 500px;
  margin: 50px auto 0;
  display: flex;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
  transition: border-color 0.4s ease;

  &:focus-within {
    border-color: #6ada1b;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.1rem;
  padding: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  &::placeholder {
    color: #ccc;
  }
`;

const Submit = styled.button`
  background: none;
  border: none;
  font-weight: 800;
  letter-spacing: 2px;
  cursor: pointer;
  padding: 10px 20px;
  transition: all 0.3s ease;

  &:hover {
    color: #6ada1b;
    transform: translateX(5px);
  }
`;

const Newsletter = () => (
  <FooterSection>
    <h2 style={{ fontSize: "2.5rem", fontWeight: "300" }}>Join the Club</h2>
    <p style={{ color: "#666" }}>
      Be the first to know about new collection drops.
    </p>
    <FormContainer onSubmit={(e) => e.preventDefault()}>
      <Input type="email" placeholder="Your Email" />
      <Submit>JOIN</Submit>
    </FormContainer>
  </FooterSection>
);

export default Newsletter;
