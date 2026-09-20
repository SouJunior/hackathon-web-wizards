import styled from 'styled-components';

interface StyledLinkProps {
  $color?: string;
  $size?: number;
  $isFirstLink?: boolean;
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  align-items: center;
  color: ${({ $color }) => $color ?? 'inherit'};
  font-size: ${({ $size }) => ($size ? `${$size}px` : '16px')};
  font-weight: ${({ $isFirstLink }) => ($isFirstLink ? 700 : 400)};
  text-decoration: none;
`;
