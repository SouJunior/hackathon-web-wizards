import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

export const FabLink = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
  z-index: 40;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 431px) {
    display: none;
  }
`;

export const BarLink = styled.a`
  display: none;

  @media (max-width: 431px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: fixed;
    bottom: 8px;
    left: 0;
    width: 100%;
    padding: 1rem;
    background: ${colorPalette.thirdColor};
    color: ${colorPalette.contrastColor};
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25);
    z-index: 40;
  }
`;
