// Libraries
import {
  useState,
  useRef,
  useEffect,
  type JSX,
} from "react";

// Enum
import { DropdownPosition } from "../../enum/enum";

// Styles
import {
  Container,
  Trigger,
  Menu,
  Item,
} from "./Dropdown.style";

// Types
import type { DropdownProps } from "./Dropdown.types";

export function Dropdown({
  trigger,
  options,
  position = DropdownPosition.BOTTOM_RIGHT,
}: DropdownProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <Container ref={ref}>
      <Trigger onClick={toggle}>{trigger}</Trigger>

      {open && (
        <Menu position={position}>
          {options.map((opt, index) => (
            <Item
              key={index}
              disabled={opt.disabled}
              onClick={(e) => {
                e.stopPropagation();

                if (opt.disabled) return;

                opt.onClick?.();
                setOpen(false);
              }}
            >
              {opt.label}
            </Item>
          ))}
        </Menu>
      )}
    </Container>
  );
}