// Libraries
import styled from "styled-components";

export const Container = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 100vh;
  flex-shrink: 0;
  padding: 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  overflow: visible;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const Status = styled.div`
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  position: absolute;
  bottom: 2px;
  right: 2px;
  border: 2px solid white;
`;

export const MenuGroup = styled.div`
  margin-bottom: 12px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.text};

  &:hover {
    background: transparent;
    cursor: default;
  }
`;

export const SubMenuItem = styled.div<{ active?: boolean }>`
  padding: 6px 16px;
  margin-left: 8px;
  border-radius: 6px;
  transition: all 0.15s ease;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? "#fff" : theme.colors.text};

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.surface};
    cursor: pointer;
  }
`;