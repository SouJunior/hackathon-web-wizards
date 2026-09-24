import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

interface StyledButtonProps {
  $contrast: boolean;
  $hideMobile?: boolean;
}

export const StyledButton = styled(Link)<StyledButtonProps>`
  width: 305px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $contrast }) =>
    $contrast ? colorPalette.contrastColor : 'transparent'};

  border: 2px solid ${colorPalette.contrastColor};
  border-radius: 8px;

  color: ${({ $contrast }) =>
    $contrast ? colorPalette.thirdColor : colorPalette.contrastColor};

  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  line-height: 200%;
  cursor: pointer;
  font-family: 'Funnel Sans', sans-serif;
  letter-spacing: 0.4px;
  margin: 0 6px;
  transition:
    background 0.2s ease,
    color 0.2s ease;

  &:hover {
    background: ${({ $contrast }) =>
      $contrast ? '#D6E0F5' : 'rgba(255, 255, 255, 0.15)'};
  }

  ${({ $hideMobile }) =>
    $hideMobile &&
    `
      @media (max-width: 431px) {
        display: none;
      }
  `}

  @media (max-width: 431px) {
    width: 382px;
    height: 83px;
  }
`;
