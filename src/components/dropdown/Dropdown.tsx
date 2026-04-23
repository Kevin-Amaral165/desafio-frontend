import { useState, useRef, useEffect, type ReactNode } from "react";
import {
  Container,
  Trigger,
  Menu,
  Item,
} from "./Dropdown.style";

type Option = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

type Position =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

type Props = {
  trigger: ReactNode;
  options: Option[];
  position?: Position;
};

export function Dropdown({
  trigger,
  options,
  position = "bottom-right",
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // 🔥 evita fechar instantâneo
    setOpen((prev) => !prev);
  };

  // fecha ao clicar fora
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