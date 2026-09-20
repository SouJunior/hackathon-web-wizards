import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { StyledLink } from './style';

interface LinkProps {
  to: string;
  children: ReactNode;
  color?: string;
  size?: number;
  isFirstLink?: boolean;
  img?: boolean;
  width?: number;
  height?: number;
}

export function Link({
  to,
  color,
  size,
  isFirstLink,
  img,
  width,
  height,
  children,
}: LinkProps) {
  return (
    <StyledLink
      as={RouterLink}
      to={to}
      $color={color}
      $size={size}
      $isFirstLink={isFirstLink}
      $img={img}
      $width={width}
      $height={height}
    >
      {children}
    </StyledLink>
  );
}
