import styled from 'styled-components';

interface StyledLinkProps {
  $color?: string;
  $size?: number;
  $isFirstLink?: boolean;
  $img?: boolean;
  $width?: number;
  $height?: number;
}

export const StyledLink = styled.a<StyledLinkProps>`
  color: ${({ $color }) => $color ?? 'inherit'};
  font-size: ${({ $size }) => ($size ? `${$size}px` : '16px')};
  font-weight: ${({ $isFirstLink }) => ($isFirstLink ? 700 : 400)};
  text-decoration: none;

  ${({ $img, $width, $height }) =>
    $img &&
    `
    display: flex;
    width: ${$width}px;
    height: ${$height}px;
  `}
`;
