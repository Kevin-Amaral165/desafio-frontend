// Libraries
import type { ReactNode } from "react";

import { DropdownPosition } from "../../enum/enum";

export type Option = {
  disabled?: boolean;
  onClick?: () => void;
  label: string;
};

export type DropdownPositionType =
    DropdownPosition.BOTTOM_RIGHT
  | DropdownPosition.BOTTOM_LEFT
  | DropdownPosition.TOP_RIGHT
  | DropdownPosition.TOP_LEFT;

  
export type DropdownProps = {
  options: Option[];
  position?: DropdownPositionType;
  trigger: ReactNode;
};