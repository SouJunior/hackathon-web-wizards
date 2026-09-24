import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const ChallengeCardContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 499px;
  min-height: 292px;
  border-radius: 10px;
  background-color: ${colorPalette.secondaryColor};
  padding: 0 50px;

  box-shadow: 6px 8px 12px rgba(0, 0, 0, 0.15);

  @media (max-width: 431px) {
    box-shadow: none;
    min-height: 183px;
    width: 369px;
    margin-left: 61px;
    border-radius: 20px 0 0 20px;
  }
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 165px;
  height: 165px;
  border-radius: 100px;

  @media (max-width: 431px) {
    img {
      width: 72px;
      height: 72px;
    }
    top: 10%;
    left: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 4px;

  h2 {
    color: ${colorPalette.paragraphColor};
    font-size: 28px;
    font-weight: 600;
    line-height: 124%;
    letter-spacing: 0.25px;
  }

  h3 {
    font-family: 'Funnel Sans', sans-serif;
    color: ${colorPalette.paragraphColor};
    font-size: 16px;
    font-weight: 500;
    line-height: 157%;
    color: ${colorPalette.answerColor};
  }

  p {
    font-family: 'Funnel Sans', sans-serif;
    color: ${colorPalette.paragraphColor};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.15px;
    margin-top: 32px;
  }

  @media (max-width: 431px) {
    align-items: flex-start;
    margin-top: 24px;

    h2 {
      font-size: 22px;
    }

    h3 {
      font-size: 12px;
    }

    p {
      margin-bottom: 24px;
    }
  }
`;
