// Libraries
import styled from "styled-components";

export const Box = styled.div<{ checked?: boolean }>`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.primary};

  ${({ checked, theme }) =>
    checked &&
    `
      background: ${theme.colors.primary};
      color: #fff;
      border-color: ${theme.colors.primary};
    `}

  &:hover {
    background: ${({ theme, checked }) =>
      checked ? theme.colors.primary : theme.colors.hover};
  }
`;