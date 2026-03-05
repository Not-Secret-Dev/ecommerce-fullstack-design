import React from "react";
import styled from "styled-components";

const Page = styled.main`
  background: #ffffff;
  min-height: 100vh;
  color: #1a1a1a;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const CheckoutGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 80px;

  @media (max-width: 1100px) {
    gap: 40px;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    /* On mobile, we might want the summary at the top so users confirm price first */
    display: flex;
    flex-direction: column;
  }
`;

const Header = styled.header`
  width: 100%;
  margin-bottom: 40px;

  @media (max-width: 900px) {
    order: -2; /* Keeps nav at the very top */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 24px;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  overflow-x: auto;
  padding-bottom: 10px;

  /* Hide scrollbar for a cleaner look while allowing swipe */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  span {
    color: #ccc;
    flex-shrink: 0;
  }
  .active {
    color: #111;
    border-bottom: 1px solid #111;
    padding-bottom: 4px;
  }
`;

const FormContainer = styled.div`
  @media (max-width: 900px) {
    order: 0;
  }
`;

const Section = styled.section`
  margin-bottom: 48px;
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const SectionLabel = styled.h2`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.cols || 2}, 1fr);
  gap: 16px;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; /* Stack inputs on small mobile */
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    color: #888;
  }

  input,
  select {
    height: 52px; /* Slightly taller for easier mobile tapping */
    padding: 0 16px;
    border: 1px solid #e0e0e0;
    font-size: 16px; /* Prevents iOS zoom-on-focus */
    border-radius: 0; /* Modern sharp look */
    transition: border-color 0.2s;
    -webkit-appearance: none;

    &:focus {
      border-color: #111;
      outline: none;
    }
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 40px;
  height: fit-content;
  background: #fcfcfc;
  padding: 32px;
  border: 1px solid #eee;

  @media (max-width: 900px) {
    position: static;
    order: -1; /* Move summary above the form on mobile */
    padding: 20px;
    margin-bottom: 20px;
  }
`;

const Item = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;

  .img {
    width: 50px;
    height: 65px;
    background: #eee;
    flex-shrink: 0;
  }
  .details {
    flex-grow: 1;
    h4 {
      font-size: 13px;
      font-weight: 600;
      margin: 0;
    }
    p {
      font-size: 12px;
      color: #888;
      margin: 2px 0 0;
    }
  }
  .price {
    font-size: 13px;
    font-weight: 600;
  }
`;

const CostLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 12px;

  ${(props) =>
    props.total &&
    `
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eee;
    font-size: 16px;
    font-weight: 700;
  `}
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  background: #111;
  color: #fff;
  border: none;
  margin-top: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 13px;
  cursor: pointer;
  transition: transform 0.1s;

  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background: #6ada1b;
  }
`;

export default function Checkout() {
  return (
    <Page>
      <CheckoutGrid>
        <Header>
          <Nav>
            <span>01 Bag</span>
            <span className="active">02 Information</span>
            <span>03 Shipping</span>
            <span>04 Payment</span>
          </Nav>
        </Header>

        <FormContainer>
          <Section>
            <SectionLabel>Contact Information</SectionLabel>
            <Field>
              <label>Email Address</label>
              <input type="email" placeholder="email@example.com" />
            </Field>
          </Section>

          <Section>
            <SectionLabel>Shipping Address</SectionLabel>
            <InputRow>
              <Field>
                <label>First Name</label>
                <input type="text" />
              </Field>
              <Field>
                <label>Last Name</label>
                <input type="text" />
              </Field>
            </InputRow>
            <Field style={{ marginBottom: "16px" }}>
              <label>Address</label>
              <input type="text" />
            </Field>
            <InputRow cols={3}>
              <Field>
                <label>City</label>
                <input type="text" />
              </Field>
              <Field>
                <label>Country</label>
                <select>
                  <option>United States</option>
                </select>
              </Field>
              <Field>
                <label>Postal Code</label>
                <input type="text" />
              </Field>
            </InputRow>
          </Section>

          <Section>
            <SectionLabel>Payment</SectionLabel>
            <div
              style={{
                border: "1px solid #111",
                padding: "15px",
                marginBottom: "16px",
                fontSize: "12px",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Credit Card
            </div>
            <Field style={{ marginBottom: "16px" }}>
              <label>Card Number</label>
              <input type="text" placeholder="0000 0000 0000 0000" />
            </Field>
            <InputRow>
              <Field>
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" />
              </Field>
              <Field>
                <label>CVC</label>
                <input type="text" placeholder="***" />
              </Field>
            </InputRow>
          </Section>
        </FormContainer>

        <Sidebar>
          <SectionLabel
            style={{ border: "none", padding: 0, marginBottom: "20px" }}
          >
            Summary
          </SectionLabel>
          <Item>
            <div className="img" />
            <div className="details">
              <h4>Premium Wool Overcoat</h4>
              <p>Charcoal / M</p>
            </div>
            <div className="price">$299.00</div>
          </Item>

          <CostLine>
            <span>Subtotal</span>
            <span>$299.00</span>
          </CostLine>
          <CostLine>
            <span>Shipping</span>
            <span>TBD</span>
          </CostLine>
          <CostLine>
            <span>Taxes</span>
            <span>$24.00</span>
          </CostLine>
          <CostLine total>
            <span>Total</span>
            <span>USD $323.00</span>
          </CostLine>

          <SubmitBtn>Complete Purchase</SubmitBtn>
          <p
            style={{
              fontSize: "10px",
              textAlign: "center",
              marginTop: "16px",
              color: "#999",
              letterSpacing: "0.5px",
            }}
          >
            SECURE ENCRYPTED TRANSACTION
          </p>
        </Sidebar>
      </CheckoutGrid>
    </Page>
  );
}
