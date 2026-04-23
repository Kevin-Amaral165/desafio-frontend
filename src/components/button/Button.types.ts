// Libraries
import type { ReactNode } from "react";

// Enum
import type { ButtonVariant } from "../../enum/enum";

export type ButtonProps = {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children?: ReactNode;
};