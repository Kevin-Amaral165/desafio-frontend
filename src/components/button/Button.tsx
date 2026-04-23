import type { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton, IconWrapper } from "./Button.style";

type Variant = "default" | "round";

type Props = {
  variant?: Variant;
  icon?: ReactNode;
  children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "default",
  icon,
  children,
  ...rest
}: Props) {
  return (
    <StyledButton variant={variant} {...rest}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
}