import React, { useState } from "react";
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

const Header = styled.section`
  text-align: center;
  margin-bottom: 5rem;
  padding-bottom: 3rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
    padding-bottom: 2rem;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: #6ada1b;
  }
`;

const Title = styled.h1`
  font-family: "Georgia", serif;
  font-size: clamp(2rem, 8vw, 3rem);
  font-weight: 400;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
  line-height: 1.2;
  color: #1a1a18;
  animation: fadeInDown 0.8s ease-out;

  @keyframes fadeInDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 3vw, 1.1rem);
  color: #666;
  max-width: 500px;
  margin: 0 auto;
  font-weight: 300;
  font-style: italic;
  animation: fadeIn 0.8s ease-out 0.1s backwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 3rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Section = styled.div`
  animation: fadeIn 0.8s ease-out ${(props) => props.delay || "0s"} backwards;

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
  font-size: clamp(1.3rem, 4vw, 1.6rem);
  font-weight: 400;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  color: #1a1a18;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 35px;
    height: 2px;
    background: #6ada1b;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 2.5rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(200, 190, 180, 0.2);

  @media (max-width: 480px) {
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  h3 {
    font-family: "Georgia", serif;
    font-size: clamp(0.95rem, 3vw, 1.05rem);
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: #1a1a18;
  }

  p {
    font-size: clamp(0.9rem, 2.5vw, 0.95rem);
    color: #666;
    line-height: 1.8;
    font-weight: 300;

    a {
      color: #1a1a18;
      text-decoration: none;
      border-bottom: 2px solid #6ada1b;
      transition: all 0.3s ease;

      &:hover {
        color: #6ada1b;
        padding-bottom: 2px;
      }
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  & > ${FormGroup} {
    margin-bottom: 0;
  }
`;

const Label = styled.label`
  font-size: clamp(0.85rem, 2vw, 0.9rem);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #1a1a18;
`;

const InputField = styled.input`
  padding: 0.875rem;
  border: 1px solid rgba(106, 218, 27, 0.4);
  border-radius: 0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-family: "Georgia", serif;
  background: white;
  transition: all 0.3s ease;
  position: relative;

  &::placeholder {
    color: #999;
    font-weight: 300;
  }

  &:focus {
    outline: none;
    border-color: #6ada1b;
    box-shadow: inset 0 0 0 3px rgba(106, 218, 27, 0.05);
    background: white;
  }

  &:disabled {
    background: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  padding: 0.875rem;
  border: 1px solid rgba(106, 218, 27, 0.4);
  border-radius: 0;
  font-size: clamp(0.9rem, 2.5vw, 1rem);
  font-family: "Georgia", serif;
  background: white;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s ease;

  &::placeholder {
    color: #999;
    font-weight: 300;
  }

  &:focus {
    outline: none;
    border-color: #6ada1b;
    box-shadow: inset 0 0 0 3px rgba(106, 218, 27, 0.05);
    background: white;
  }

  &:disabled {
    background: #f5f5f5;
    color: #999;
    cursor: not-allowed;
  }
`;

const SubmitButton = styled.button`
  padding: clamp(0.85rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem);
  background: #6ada1b;
  color: white;
  border: 2px solid #6ada1b;
  border-radius: 0;
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  margin-top: 0.5rem;
  font-family: "Georgia", serif;
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

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }

  @media (hover: none) {
    &:active {
      background: #5ac91a;
      color: white;
    }
  }
`;

const Message = styled.div`
  padding: 1rem;
  border-left: 3px solid
    ${(props) => (props.type === "success" ? "#4caf50" : "#f44336")};
  background: ${(props) => (props.type === "success" ? "#f1f8f6" : "#fef5f5")};
  color: ${(props) => (props.type === "success" ? "#2e7d32" : "#c62828")};
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SocialSection = styled.section`
  border-top: 1px solid rgba(200, 190, 180, 0.3);
  padding-top: 3rem;
  text-align: center;
  margin-top: 5rem;

  @media (max-width: 768px) {
    padding-top: 2rem;
    margin-top: 4rem;
  }

  h3 {
    font-family: "Georgia", serif;
    font-size: clamp(1.1rem, 4vw, 1.4rem);
    font-weight: 400;
    margin-bottom: 1.5rem;
    color: #1a1a18;
    letter-spacing: -0.01em;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #6ada1b;
  color: #1a1a18;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: #6ada1b;
    transform: scale(0);
    transition: transform 0.4s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-3px);

    &::before {
      transform: scale(1);
    }
  }

  @media (hover: none) {
    &:active {
      background: #6ada1b;
      color: white;
    }
  }
`;

export default function ContactCreative() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setError("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    console.log("Form submitted:", formData);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

  return (
    <GlobalStyle>
      <Container>
        <Header>
          <Title>Get in Touch</Title>
          <Subtitle>
            We'd love to hear from you. Reach out with any questions or
            inquiries.
          </Subtitle>
        </Header>

        <ContentGrid>
          <Section delay="0.1s">
            <SectionTitle>Contact Info</SectionTitle>

            <ContactItem>
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@example.com">hello@example.com</a>
              </p>
            </ContactItem>

            <ContactItem>
              <h3>Phone</h3>
              <p>
                <a href="tel:+1234567890">+1 (234) 567-8900</a>
              </p>
            </ContactItem>

            <ContactItem>
              <h3>Address</h3>
              <p>
                123 Main Street
                <br />
                New York, NY 10001
                <br />
                United States
              </p>
            </ContactItem>

            <ContactItem>
              <h3>Hours</h3>
              <p>
                Mon – Fri: 9 AM – 6 PM
                <br />
                Sat: 10 AM – 4 PM
                <br />
                Sun: Closed
              </p>
            </ContactItem>
          </Section>

          <Section delay="0.2s">
            <SectionTitle>Send Message</SectionTitle>

            <Form onSubmit={handleSubmit}>
              {submitted && (
                <Message type="success">
                  Thank you for reaching out. We'll be in touch shortly.
                </Message>
              )}

              {error && <Message type="error">{error}</Message>}

              <FormRow>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <InputField
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <InputField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label htmlFor="subject">Subject</Label>
                <InputField
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <TextArea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </FormGroup>

              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </SubmitButton>
            </Form>
          </Section>
        </ContentGrid>

        <SocialSection>
          <h3>Connect</h3>
          <SocialLinks>
            <SocialLink
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              title="Twitter"
            >
              𝕏
            </SocialLink>
            <SocialLink
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              📷
            </SocialLink>
            <SocialLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook"
            >
              f
            </SocialLink>
            <SocialLink
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              in
            </SocialLink>
          </SocialLinks>
        </SocialSection>
      </Container>
    </GlobalStyle>
  );
}
