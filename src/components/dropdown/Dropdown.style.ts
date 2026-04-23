import styled, { css } from "styled-components";

type Position =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

export const Container = styled.div`
  position: relative;
  display: inline-block;
`;

export const Trigger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const Menu = styled.div<{ position: Position }>`
  position: absolute;
  min-width: 140px;

  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;

  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 1000;

  ${({ position }) => {
    switch (position) {
      case "bottom-left":
        return css`
          top: calc(100% + 8px);
          left: 0;
        `;
      case "top-right":
        return css`
          bottom: calc(100% + 8px);
          right: 0;
        `;
      case "top-left":
        return css`
          bottom: calc(100% + 8px);
          left: 0;
        `;
      case "bottom-right":
      default:
        return css`
          top: calc(100% + 8px);
          right: 0;
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
  color: ${({ disabled }) => (disabled ? "#9ca3af" : "#111827")};

  transition: background 0.2s;

  &:hover {
    background: ${({ disabled }) =>
      disabled ? "transparent" : "#f3f4f6"};
  }
`;