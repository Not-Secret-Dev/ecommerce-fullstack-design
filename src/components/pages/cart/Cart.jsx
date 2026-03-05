import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Page = styled.main`
  background: #fff;
  min-height: 100vh;
  padding: 80px 20px;
  color: #1a1a1a;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: clamp(22px, 5vw, 28px);
  font-weight: 500;
  margin-bottom: 40px;
  letter-spacing: -0.5px;
`;

const CartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 60px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #999;

  @media (max-width: 640px) {
    display: none; /* Hide headers on small mobile */
  }
`;

const ItemRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px 100px;
  padding: 32px 0;
  border-bottom: 1px solid #f0f0f0;
  align-items: center;

  @media (max-width: 640px) {
    /* Stack layout for mobile */
    grid-template-columns: 100px 1fr;
    grid-template-areas:
      "image info"
      "image qty"
      "image price";
    gap: 10px 20px;
    padding: 20px 0;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;

  @media (max-width: 640px) {
    grid-area: info;
    align-items: flex-start;
  }

  .img-placeholder {
    width: 100px;
    aspect-ratio: 3/4;
    background: #f7f7f7;
    flex-shrink: 0;

    @media (max-width: 640px) {
      grid-area: image;
      width: 100px;
    }
  }

  .details {
    h3 {
      font-size: 15px;
      font-weight: 600;
      margin: 0 0 4px 0;
    }
    p {
      font-size: 13px;
      color: #888;
      margin: 0;
    }
    button {
      background: none;
      border: none;
      padding: 0;
      margin-top: 12px;
      font-size: 11px;
      text-decoration: underline;
      cursor: pointer;
      color: #999;
      &:hover {
        color: #ff4444;
      }
    }
  }
`;

const QtySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #eee;
  width: fit-content;

  @media (max-width: 640px) {
    grid-area: qty;
  }

  button {
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  span {
    width: 35px;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
  }
`;

const Price = styled.div`
  font-size: 14px;
  font-weight: 600;
  text-align: right;

  @media (max-width: 640px) {
    grid-area: price;
    text-align: left;
    font-size: 16px;
  }
`;

const Summary = styled.aside`
  background: #fcfcfc;
  padding: 40px;
  border: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }

  h2 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

const SummaryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${(props) => (props.total ? "#111" : "#666")};
  font-weight: ${(props) => (props.total ? "700" : "400")};
  ${(props) =>
    props.total &&
    `
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #eee;
    font-size: 18px;
  `}
`;

const CheckoutBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background: #111;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 12px;
  margin-top: 32px;
  transition: all 0.3s ease;

  &:hover {
    background: #6ada1b;
  }
`;

export default function CartPage() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Premium Wool Overcoat",
      color: "Charcoal",
      size: "M",
      price: 299,
      qty: 1,
    },
    {
      id: 2,
      name: "Cashmere Scarf",
      color: "Stone",
      size: "OS",
      price: 85,
      qty: 1,
    },
  ]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <Page>
      <Container>
        <Title>Your Shopping Bag</Title>

        {items.length > 0 ? (
          <CartGrid>
            <div>
              <TableHeader>
                <span>Product</span>
                <span>Quantity</span>
                <span style={{ textAlign: "right" }}>Total</span>
              </TableHeader>

              {items.map((item) => (
                <ItemRow key={item.id}>
                  <ProductInfo>
                    <div className="img-placeholder" />
                    <div className="details">
                      <h3>{item.name}</h3>
                      <p>
                        {item.color} / {item.size}
                      </p>
                      <button>Remove</button>
                    </div>
                  </ProductInfo>

                  <QtySelector>
                    <button>−</button>
                    <span>{item.qty}</span>
                    <button>+</button>
                  </QtySelector>

                  <Price>${(item.price * item.qty).toFixed(2)}</Price>
                </ItemRow>
              ))}

              <Link
                to="/"
                style={{
                  display: "inline-block",
                  marginTop: "32px",
                  fontSize: "13px",
                  color: "#111",
                  fontWeight: 600,
                }}
              >
                ← Continue Shopping
              </Link>
            </div>

            <Summary>
              <h2>Order Summary</h2>
              <SummaryLine>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </SummaryLine>
              <SummaryLine>
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </SummaryLine>
              <SummaryLine total>
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </SummaryLine>

              <CheckoutBtn to="/checkout">Proceed to Checkout</CheckoutBtn>

              <div
                style={{
                  marginTop: "24px",
                  fontSize: "12px",
                  color: "#999",
                  lineHeight: "1.5",
                  textAlign: "center",
                }}
              >
                Tax included. Shipping and promo codes <br /> applied during
                checkout.
              </div>
            </Summary>
          </CartGrid>
        ) : (
          <div style={{ textAlign: "center", padding: "100px 0" }}>
            <p style={{ color: "#888", marginBottom: "24px" }}>
              Your bag is currently empty.
            </p>
            <CheckoutBtn
              to="/"
              style={{
                width: "auto",
                padding: "0 40px",
                display: "inline-flex",
              }}
            >
              Shop New Arrivals
            </CheckoutBtn>
          </div>
        )}
      </Container>
    </Page>
  );
}
