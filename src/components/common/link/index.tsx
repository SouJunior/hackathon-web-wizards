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
  alt?: string;
}

export function Link({
  to,
  color,
  size,
  isFirstLink,
  img,
  alt,
  children,
}: LinkProps) {
  const content = img ? (
    <img src={children as string} alt={alt} width={24} height={24} />
  ) : (
    children
  );

  if (to.startsWith('http')) {
    return (
      <StyledLink
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        $color={color}
        $size={size}
        $isFirstLink={isFirstLink}
      >
        {content}
      </StyledLink>
    );
  }

  return (
    <StyledLink
      as={RouterLink}
      to={to}
      $color={color}
      $size={size}
      $isFirstLink={isFirstLink}
    >
      {content}
    </StyledLink>
  );
}
