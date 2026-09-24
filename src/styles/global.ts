import { createGlobalStyle } from 'styled-components';
import { colorPalette } from './colorPalette';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Funnel Display', sans-serif;
  }
`;

export const SectionTitle = styled.h1`
  color: ${colorPalette.thirdColor};
  font-size: 40px;
  font-weight: 700;
  text-align: center;
  line-height: 120%;
  letter-spacing: -0.5px;
  margin-bottom: 12px;

  @media (max-width: 431px) {
    font-size: 28px;
  }
`;

export const SectionParagraph = styled.p`
  color: ${colorPalette.paragraphColor};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: 'Funnel Sans', sans-serif;
  line-height: 175%;
  letter-spacing: 0.15px;

  @media (max-width: 431px) {
    font-size: 16px;
  }
`;

export const ContrastParagraph = styled.p`
  color: ${colorPalette.contrastColor};
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  font-family: 'Funnel Sans', sans-serif;
  line-height: 175%;
  letter-spacing: 0.15px;

  @media (max-width: 431px) {
    font-size: 16px;
    text-align: start;
  }
`;
