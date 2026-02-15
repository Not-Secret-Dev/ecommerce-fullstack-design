import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');
`;

const MainContainer = styled.div`
  background:
    linear-gradient(94.99deg, #2c7cf1 7.19%, rgba(0, 209, 255, 0.5) 89.49%),
    url("/public/Assets/Pages/Landing/Inquiry/background.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  max-width: 1180px;
  height: 420px;
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    pointer-events: none;
    z-index: 1;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    height: auto;
    min-height: 420px;
    border-radius: 0;
    padding: 40px 24px;
  }

  /* Mobile */
  @media (max-width: 640px) {
    height: 180px;
    min-height: unset;
    padding: 24px 20px;
    border-radius: 10px;
    align-items: center;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 2;
  gap: 0;

  /* Tablet: stack vertically */
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
  }

  /* Mobile: only show text + button, centered */
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
  }
`;

const TextContent = styled.div`
  width: 50%;
  color: white;
  padding-left: 52px;
  padding-right: 32px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }

  @media (max-width: 640px) {
    width: 100%;
    padding: 0;
  }
`;

const Heading = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.08;
  letter-spacing: -0.5px;
  margin: 0 0 20px 0;
  color: #ffffff;

  @media (max-width: 1024px) {
    font-size: 34px;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 1.2;
    margin-bottom: 0;
    font-weight: 700;
  }
`;

const Subtext = styled.p`
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.6;
  letter-spacing: -0.1px;
  color: rgba(255, 255, 255, 0.82);
  max-width: 340px;
  margin: 0;

  /* Hide on mobile — screenshot shows no subtext */
  @media (max-width: 640px) {
    display: none;
  }
`;

/* Mobile-only inline button (shown instead of form card) */
const MobileButton = styled.button`
  display: none;

  @media (max-width: 640px) {
    display: inline-flex;
    align-items: center;
    height: 40px;
    padding: 0 20px;
    background: rgba(255, 255, 255, 0.18);
    color: #fff;
    border: 1.5px solid rgba(255, 255, 255, 0.7);
    border-radius: 7px;
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    letter-spacing: 0.1px;
    transition: background 0.18s;
    backdrop-filter: blur(4px);

    &:hover {
      background: rgba(255, 255, 255, 0.28);
    }
  }
`;

const FormWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  padding-right: 52px;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
  }

  /* Hide entire form on mobile */
  @media (max-width: 640px) {
    display: none;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 24px;
  width: 460px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 1024px) {
    width: 100%;
    max-width: 560px;
  }
`;

const CardTitle = styled.p`
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 19px;
  line-height: 1.3;
  letter-spacing: -0.2px;
  color: #1a1a2e;
  margin: 0 0 2px 0;
`;

const sharedInputStyles = `
  width: 100%;
  border-radius: 7px;
  border: 1.5px solid #dee2e7;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  color: #333;
  outline: none;
  background: #fafbfc;
  box-sizing: border-box;
  transition: border-color 0.18s, background 0.18s;

  &:focus {
    border-color: #2c7cf1;
    background: #fff;
  }

  &::placeholder {
    color: #adb5bd;
  }
`;

const StyledSelect = styled.select`
  ${sharedInputStyles}
  height: 42px;
  padding-left: 13px;
  appearance: auto;
  cursor: pointer;
  color: ${({ value }) => (value === "" ? "#adb5bd" : "#333")};
`;

const Textarea = styled.textarea`
  ${sharedInputStyles}
  height: 88px;
  padding: 11px 13px;
  resize: vertical;
`;

const QuantityRow = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const QuantityInput = styled.input`
  ${sharedInputStyles}
  flex: 1;
  height: 42px;
  padding-left: 13px;
`;

const UnitSelect = styled.select`
  ${sharedInputStyles}
  width: 110px;
  height: 42px;
  padding-left: 10px;
  appearance: auto;
  cursor: pointer;
`;

const SendButton = styled.button`
  height: 42px;
  width: fit-content;
  padding: 0 22px;
  background: linear-gradient(180deg, #127fff 0%, #0067ff 100%);
  color: #fff;
  border: none;
  border-radius: 7px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 14.5px;
  cursor: pointer;
  letter-spacing: 0.1px;
  transition:
    opacity 0.18s,
    transform 0.12s,
    box-shadow 0.18s;
  box-shadow: 0 2px 12px rgba(44, 124, 241, 0.28);

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
    box-shadow: 0 4px 18px rgba(44, 124, 241, 0.38);
  }

  &:active {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default function Inquiry() {
  const [item, setItem] = useState("");
  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("Pcs");

  return (
    <>
      <GlobalFonts />
      <MainContainer>
        <Content>
          <TextContent>
            <Heading>
              An easy way to send
              <br />
              requests to all suppliers
            </Heading>
            <Subtext>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Subtext>
            {/* Mobile-only CTA button */}
            <MobileButton onClick={() => alert("Inquiry sent!")}>
              Send inquiry
            </MobileButton>
          </TextContent>

          <FormWrapper>
            <Card>
              <CardTitle>Send quote to suppliers</CardTitle>

              <StyledSelect
                value={item}
                onChange={(e) => setItem(e.target.value)}
              >
                <option value="" disabled>
                  What item you need?
                </option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="clothing">Clothing</option>
              </StyledSelect>

              <Textarea
                placeholder="Type more details"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
              />

              <QuantityRow>
                <QuantityInput
                  type="number"
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  min="0"
                />
                <UnitSelect
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                >
                  <option value="Pcs">Pcs</option>
                  <option value="KG">KG</option>
                  <option value="L">L</option>
                  <option value="Box">Box</option>
                </UnitSelect>
              </QuantityRow>

              <SendButton onClick={() => alert("Inquiry sent!")}>
                Send inquiry
              </SendButton>
            </Card>
          </FormWrapper>
        </Content>
      </MainContainer>
    </>
  );
}
