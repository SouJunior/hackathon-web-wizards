import styled from 'styled-components';
import { colorPalette } from '@/styles/colorPalette';

interface StyledLinkProps {
  $color?: string;
  $size?: number;
  $isFirstLink?: boolean;
  $button?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ $color }) => $color ?? 'inherit'};
  font-size: ${({ $size }) => ($size ? `${$size}px` : '16px')};
  font-weight: ${({ $isFirstLink }) => ($isFirstLink ? 700 : 400)};
  text-decoration: none;

  ${({ $button }) =>
    $button &&
    `
    justify-content: center;
    color: ${colorPalette.thirdColor};
    background: ${colorPalette.contrastColor};
    padding: 0.75rem 2rem;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
  `}
`;
