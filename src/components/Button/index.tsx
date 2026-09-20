import { StyledButton } from './styles';

interface ButtonProps {
  to: string;
  children: React.ReactNode;
  $contrast?: boolean;
  $hideMobile?: boolean;
}

export function Button({
  to,
  children,
  $contrast = false,
  $hideMobile = false,
}: ButtonProps) {
  return (
    <StyledButton to={to} $contrast={$contrast} $hideMobile={$hideMobile}>
      {children}
    </StyledButton>
  );
}
