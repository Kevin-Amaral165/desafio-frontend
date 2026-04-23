import styled from "styled-components";

export const Container = styled.div`
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12px;

  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  padding: 7px 12px;

  font-size: 13px;
  font-weight: 500;

  border-radius: 6px;

  border: 1px solid ${({ theme }) => theme.colors.border};

  background: ${({ theme }) => theme.colors.surface};

  color: ${({ theme }) => theme.colors.text};

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;

  transition: all 0.15s ease;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.04);

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    transform: scale(0.97);
  }
`;