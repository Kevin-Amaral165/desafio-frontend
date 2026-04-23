// Libraries
import {
  useState,
  useRef,
  useEffect,
  type JSX,
  type RefObject,
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
  const [open, setOpen] = useState<boolean>(false);

  // Ref outside
  const ref: RefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null);

  // Toggle dropdown
  const toggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () =>
      window.removeEventListener("click", handleClickOutside);
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
                e.stopPropagation(); // stop propagation to prevent immediate close

                if (opt.disabled) return;

                opt.onClick?.(); // execute action
                setOpen(false);  // close dropdown after action
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