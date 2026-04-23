// Libraries
import styled, { css } from "styled-components";

// Enum
import { DropdownPosition } from "../../enum/enum";

// Types
import type { DropdownPositionType } from "./Dropdown.types";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Trigger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Menu = styled.div<{ position: DropdownPositionType }>`
  position: absolute;
  min-width: 140px;

  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1000;

  ${({ position }) => {
    switch (position) {
      case DropdownPosition.BOTTOM_LEFT:
        return css`
          top: calc(100% + 8px);
          left: 0;
        `;
      case DropdownPosition.TOP_RIGHT:
        return css`
          bottom: calc(100% + 8px);
          right: 0;
        `;
      case DropdownPosition.TOP_LEFT:
        return css`
          bottom: calc(100% + 8px);
          left: 0;
        `;
      case DropdownPosition.BOTTOM_RIGHT:
      default:
        return css`
          top: calc(100% + 8px);
          left: 0;
        `;
    }
  }}

  animation: fadeIn 0.15s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Item = styled.div<{ disabled?: boolean }>`
  padding: 10px 12px;
  font-size: 14px;

  display: flex;
  align-items: center;
  gap: 8px;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  color: ${({ disabled, theme }) =>
    disabled ? "#9ca3af" : theme.colors.text};

  transition: 0.2s;

  &:hover {
    background: ${({ disabled, theme }) =>
      disabled ? "transparent" : theme.colors.surface};
  }
`;