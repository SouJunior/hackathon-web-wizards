import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const BigNumbersContainer = styled.section`
  position: relative;
  width: 100%;
  height: 670px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(
    to right,
    ${colorPalette.thirdColor},
    ${colorPalette.primaryColor}
  );

  @media (max-width: 431px) {
    height: 644px;
  }
`;

export const BigNumbersContent = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1440px;
  min-height: 670px;

  margin: 0 auto;
  padding: 0 68px;

  @media (max-width: 431px) {
    min-height: 589px;
    padding: 64px 24px;
    align-items: flex-start;
    max-width: 382px;
  }
`;

export const BigNumbersTextContent = styled.div`
  position: relative;
  z-index: 2;

  width: 599px;

  @media (max-width: 431px) {
    width: 100%;
  }
`;

export const BigNumbersTitle = styled.h2`
  display: flex;
  flex-direction: column;

  color: ${colorPalette.contrastColor};
  font-size: 28px;
  font-weight: 400;
  line-height: 124%;
  letter-spacing: 0.25px;

  @media (max-width: 431px) {
    font-size: 22px;
    padding-right: 20px;
  }
`;

export const BigNumbersHighlight = styled.span`
  font-size: 40px;
  font-weight: 700;
  margin: 32px 0;
  line-height: 120%;
  letter-spacing: -0.5px;

  @media (max-width: 431px) {
    font-size: 28px;
  }
`;

export const BigNumbersDescription = styled.div`
  width: 100%;
  height: 2px;
  margin: 32px 0 24px;

  background-color: ${colorPalette.contrastColor};
`;

export const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  width: 100%;
  height: 75px;

  @media (max-width: 431px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

export const NumberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 58px;
  padding: 8px;

  border-radius: 6px;

  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);

  @media (max-width: 431px) {
    min-height: 70px;
  }
`;

export const NumberValue = styled.strong`
  color: ${colorPalette.contrastColor};
  font-size: 28px;
  font-weight: 600;
  line-height: 124%;
  letter-spacing: 0.25px;
`;

export const NumberDescription = styled.span`
  color: ${colorPalette.contrastColor};
  font-family: 'Funnel Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 143%;
  text-align: center;
`;

export const BigNumbersImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
  right: -40px;

  width: 670px;

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  img {
    display: block;
    width: 540px;
    height: auto;
    object-fit: contain;
  }

  @media (max-width: 431px) {
    right: -120px;
    width: 430px;

    img {
      display: none;
    }
  }
`;

export const DesignRight = styled.div`
  position: absolute;
  right: 250px;
  top: 350px;
  height: 100%;
  transform: translate(50%, -50%);
  z-index: 0;

  img {
    display: block;
    width: 1000px;
    height: 763px;
  }

  @media (max-width: 431px) {
    display: none;
  }
`;

export const DesignCircle = styled.div`
  position: absolute;
  right: 260px;
  top: 400px;
  height: 100%;
  transform: translate(50%, -50%);
  z-index: 0;

  img {
    display: block;
    width: 653px;
    height: 763px;
  }

  @media (max-width: 431px) {
    display: none;
  }
`;
