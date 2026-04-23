// Libraries
import styled from "styled-components";

export const Container = styled.div<{ selected?: boolean }>`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ selected, theme }) =>
    selected ? theme.colors.selected : theme.colors.bg};
  cursor: pointer;
  transition: all 0.15s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const Name = styled.div`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subject = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 8px;
  align-items: center;
`;

export const Avatar = styled.div<{ selected?: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.avatarSelected : theme.colors.avatarBg};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.15s ease;

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const Users = styled.div`
  display: flex;
  gap: 6px;
`;
export const UserBubble = styled.span<{ selected?: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.primary : theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;