// Libraries
import type { ReactNode } from "react";

// Enum
import type { ButtonVariant } from "../../enum/enum";

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  variant?: ButtonVariant;
};