import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';
import { ContrastParagraph } from '@/styles/global';

export const CTAContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 768px;
  max-height: 768px;
  max-width: 100%;

  @media (max-width: 431px) {
    width: 530px;
    height: 399px;
  }
`;

export const CTACard = styled.div`
  display: flex;
  height: 576px;
  width: 1280px;
  background: linear-gradient(
    to right,
    ${colorPalette.primaryColor} 0%,
    ${colorPalette.thirdColor} 100%
  );
  border-radius: 20px;

  @media (max-width: 431px) {
    height: 430px;
    width: 399px;
    max-height: 399px;
  }
`;

export const CTATitle = styled.h1`
  color: ${colorPalette.contrastColor};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  line-height: 120%;
  letter-spacing: -0.5px;
  margin-bottom: 24px;

  @media (max-width: 431px) {
    text-align: start;
    font-size: 28px;
  }
`;

export const CTAContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 96px 0 96px;
  width: 100%;

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
    padding-top: 48px;
    justify-content: center;
  }
`;

export const CTATextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 452px;
  height: 337px;

  @media (max-width: 431px) {
    max-width: 382px;
    margin-bottom: 17px;
    text-align: start;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 44.5px;
  justify-content: flex-start;
  align-items: flex-start;

  a {
    margin: 0;
    width: 357px;
    height: 61px;
  }

  @media (max-width: 431px) {
    a {
      width: 334px;
      height: 61px;
    }
    margin-top: 24px;
  }
`;

export const CTAMascote = styled.div`
  width: 464px;

  @media (max-width: 431px) {
    img {
      width: 419px;
    }
    display: none;
  }
`;

export const CTAFirstParagraph = styled(ContrastParagraph)`
  @media (max-width: 431px) {
    font-weight: bold;
  }
`;

export const CTASecondParagraph = styled(ContrastParagraph)`
  font-size: 16px;
  line-height: 150%;
  text-align: start;
  margin: 12px 0;

  @media (max-width: 431px) {
    line-height: 175%;
  }
`;
