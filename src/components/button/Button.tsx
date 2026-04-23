// Libraries
import type { JSX } from "react";

// Enum
import { ButtonVariant } from "../../enum/enum";

// Style
import { StyledButton, IconWrapper } from "./Button.style";

// Types
import type { ButtonProps } from "./Button.types";

export function Button({
  variant = ButtonVariant.DEFAULT,
  icon,
  children,
}: ButtonProps): JSX.Element {
  return (
    <StyledButton variant={variant}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {children}
    </StyledButton>
  );
}