// Libraries
import type { ReactNode } from "react";

type Variant = "default" | "round";

export type ButtonProps = {
  variant?: Variant;
  icon?: ReactNode;
  children?: ReactNode;
};