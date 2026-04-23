// Libraries
import styled, { css } from "styled-components";

// Enum
import { ButtonVariant } from "../../enum/enum";

// Types
import type { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  /* DEFAULT BUTTON */
  ${({ variant, theme }) =>
    variant === ButtonVariant.DEFAULT &&
    css`
      padding: 8px 14px;
      border-radius: 6px;
      background: ${theme.colors.primary};
      color: white;

      &:hover {
        opacity: 0.9;
      }
    `}

  /* ROUND BUTTON */
  ${({ variant, theme }) =>
    variant === ButtonVariant.ROUND &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${theme.colors.surface};
      color: ${theme.colors.text};

      &:hover {
        background: ${theme.colors.border};
      }
    `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;