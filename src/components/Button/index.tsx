import { StyledButton } from './styles';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  $contrast?: boolean;
  $hideMobile?: boolean;
  target?: string;
  rel?: string;
}

export function Button({
  to,
  children,
  $contrast = false,
  $hideMobile = false,
  target,
  rel,
}: ButtonProps) {
  return (
    <StyledButton
      to={to}
      $contrast={$contrast}
      $hideMobile={$hideMobile}
      target={target}
      rel={rel}
    >
      {children}
    </StyledButton>
  );
}
