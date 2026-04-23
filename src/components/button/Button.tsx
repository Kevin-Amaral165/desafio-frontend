// Libraries
import type { JSX } from "react";

// Enum
import { ButtonVariant } from "../../enum/enum";

// Style
import { StyledButton, IconWrapper } from "./Button.style";

// Types
import type { ButtonProps } from "./Button.types";

export function Button({
  children,
  icon,
  variant = ButtonVariant.DEFAULT,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton variant={variant}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
}