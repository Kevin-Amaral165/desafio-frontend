// Styles
import { Box } from "./Checkbox.style";

// Types
import type { CheckboxProps } from "./Checbox.types";

export function Checkbox({ checked }: CheckboxProps) {
  return <Box checked={checked}>{checked && "✓"}</Box>;
}
