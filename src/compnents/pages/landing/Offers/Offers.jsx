import React, { useState, useEffect } from "react";
import styled from "styled-components";

/* ─── Wrapper ─────────────────────────────────────────────────────────────── */
const OffersContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 20px auto;
  border: 1px solid #dee2e7;
  border-radius: 6px;
  display: flex;
  align-items: stretch;
  box-sizing: border-box;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* ─── Left: countdown panel ───────────────────────────────────────────────── */
const Countdown = styled.div`
  width: 220px;
  min-width: 220px;
  flex-shrink: 0;
  padding: 28px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  border-right: 1px solid #dee2e7;

  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    border-right: none;
    border-bottom: 1px solid #dee2e7;
    /* side-by-side: text left, clock right */
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    gap: 0;
  }
`;

const CountdownText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CountdownTitle = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  color: #1c1c1c;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CountdownSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: #8b96a5;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ClockRow = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 0;
    gap: 6px;
  }
`;

/* hide "Days" on mobile — only Hr / Min / Sec shown like the screenshot */
const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  &[data-unit="Days"] {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const TimeValue = styled.div`
  width: 42px;
  height: 44px;
  background-color: #606060;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  font-variant-numeric: tabular-nums;
  transition: background-color 0.2s ease;

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 18px;
  }
`;

const TimeLabel = styled.span`
  font-size: 11px;
  color: #8b96a5;
  font-weight: 400;
`;

/* ─── Right: offer cards ──────────────────────────────────────────────────── */
const OfferItems = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    overflow-x: auto;
    overflow-y: visible;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 16px 12px;
    gap: 12px;
    align-items: center;

    &::-webkit-scrollbar {
      height: 4px;
    }
    &::-webkit-scrollbar-track {
      background: #f5f5f5;
      border-radius: 2px;
    }
    &::-webkit-scrollbar-thumb {
      background: #dee2e7;
      border-radius: 2px;
    }
  }
`;

const OfferCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 12px;
  border-right: 1px solid #dee2e7;
  box-sizing: border-box;
  min-width: 0;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

  &:last-child {
    border-right: none;
  }

  &:hover {
    background-color: #f8faff;

    img {
      transform: scale(1.08);
    }

    span[data-discount] {
      background-color: #ff4d4f;
      color: #fff;
      border-color: #ff4d4f;
    }
  }

  &:active {
    transform: scale(0.97);
    background-color: #f0f5ff;
  }

  @media (max-width: 768px) {
    flex: 0 0 130px;
    min-width: 130px;
    scroll-snap-align: start;
    border-right: none;
    border: 1px solid #dee2e7;
    border-radius: 6px;
    padding: 14px 10px;
  }
`;

const OfferImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  flex-shrink: 0;
  transition: transform 0.25s ease;

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

const OfferTitle = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 500;
  color: #1c1c1c;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

const OfferDiscount = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: #ff4d4f;
  background-color: #fff1f0;
  border: 1px solid #ffccc7;
  border-radius: 20px;
  padding: 2px 12px;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
  white-space: nowrap;
`;

/* ─── Component ───────────────────────────────────────────────────────────── */
const Offers = () => {
  const TARGET_SECONDS = 4 * 86400 + 13 * 3600 + 34 * 60 + 56;
  const [timeLeft, setTimeLeft] = useState(TARGET_SECONDS);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeft / 86400);
  const hours = Math.floor((timeLeft % 86400) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  const pad = (n) => String(n).padStart(2, "0");

  const units = [
    { value: pad(days), label: "Days" },
    { value: pad(hours), label: "Hour" },
    { value: pad(minutes), label: "Min" },
    { value: pad(seconds), label: "Sec" },
  ];

  const items = [
    {
      id: 1,
      title: "Smart watches",
      image: "/Assets/Pages/Landing/Offers/smartwatch.png",
      disc: "-25%",
    },
    {
      id: 2,
      title: "Laptops",
      image: "/Assets/Pages/Landing/Offers/laptop.png",
      disc: "-15%",
    },
    {
      id: 3,
      title: "GoPro Cameras",
      image: "/Assets/Pages/Landing/Offers/camera.png",
      disc: "-40%",
    },
    {
      id: 4,
      title: "Wireless Headphones",
      image: "/Assets/Pages/Landing/Offers/headphone.png",
      disc: "-25%",
    },
  ];

  return (
    <OffersContainer>
      <Countdown>
        <CountdownText>
          <CountdownTitle>Deals and offers</CountdownTitle>
          <CountdownSubtitle>Hygiene equipments</CountdownSubtitle>
        </CountdownText>
        <ClockRow>
          {units.map(({ value, label }) => (
            <TimeUnit key={label} data-unit={label}>
              <TimeValue>{value}</TimeValue>
              <TimeLabel>{label}</TimeLabel>
            </TimeUnit>
          ))}
        </ClockRow>
      </Countdown>

      <OfferItems>
        {items.map(({ id, title, image, disc }) => (
          <OfferCard key={id}>
            <OfferImage src={image} alt={title} />
            <OfferTitle>{title}</OfferTitle>
            <OfferDiscount data-discount>{disc}</OfferDiscount>
          </OfferCard>
        ))}
      </OfferItems>
    </OffersContainer>
  );
};

export default Offers;
