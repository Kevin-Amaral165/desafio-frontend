import styled, { css } from "styled-components";

type Props = {
  variant: "default" | "round";
};

export const StyledButton = styled.button<Props>`
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  ${({ variant }) =>
    variant === "default" &&
    css`
      padding: 8px 14px;
      border-radius: 6px;
      background: #6366f1;
      color: white;

      &:hover {
        background: #4f46e5;
      }
    `}

  ${({ variant }) =>
    variant === "round" &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #e5e7eb;

      &:hover {
        background: #d1d5db;
      }
    `}
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
`;