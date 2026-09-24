import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const HeroTitle = styled.h1`
  color: ${colorPalette.contrastColor};
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  line-height: 120%;
  letter-spacing: -1.5px;
  margin-bottom: 12px;

  @media (max-width: 431px) {
    text-align: start;
    margin-bottom: 32px;
  }
`;

export const HeroCall = styled.h1`
  color: ${colorPalette.contrastColor};
  font-size: 12px;
  font-weight: 700;
  text-align: center;
  line-height: 196%;
  letter-spacing: 1px;
  margin-bottom: 40px;
  padding: 10px;
  border-radius: 10px;
  font-family: 'Funnel Sans', sans-serif;
  background-color: color-mix(
    in srgb,
    ${colorPalette.contrastColor} 10%,
    transparent
  );

  @media (max-width: 431px) {
    text-align: start;
    margin-bottom: 32px;
  }
`;

export const HeroContainer = styled.section`
  display: flex;
  height: 1005px;
  max-width: 100%;
  overflow-x: clip;
  background: linear-gradient(
    to right,
    ${colorPalette.primaryColor} 0%,
    ${colorPalette.thirdColor} 100%
  );
  border-radius: 0 0 80px 80px;

  @media (max-width: 431px) {
    height: 750px;
    border-radius: 0 0 20px 20px;
  }
`;

export const AreasContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 96px;
  position: relative;
  overflow: visible;

  @media (max-width: 431px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const HeroTextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 662px;
  margin-bottom: 56px;

  @media (max-width: 431px) {
    max-width: 347px;
    margin-bottom: 17px;
    text-align: start;
    align-items: flex-start;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 69px;

  @media (max-width: 431px) {
    .about-project {
      display: none;
    }
    position: relative;
    top: 240px;
  }
`;

export const HeroMascote = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  @media (max-width: 431px) {
    img {
      width: 419px;
    }
    bottom: 103px;
    right: -222px;
  }
`;

export const DesignLeft = styled.div`
  position: absolute;
  left: 130px;
  top: 350px;
  transform: translate(-50%, -50%) scaleX(-1);
  z-index: 0;
  height: 100%;

  img {
    display: block;
    width: 887px;
    height: 1087px;
  }

  @media (max-width: 431px) {
    display: none;
  }
`;

export const DesignRight = styled.div`
  position: absolute;
  right: 130px;
  top: 350px;
  height: 100%;
  transform: translate(50%, -50%);
  z-index: 0;

  img {
    display: block;
    width: 887px;
    height: 1087px;
  }

  @media (max-width: 431px) {
    display: none;
  }
`;
