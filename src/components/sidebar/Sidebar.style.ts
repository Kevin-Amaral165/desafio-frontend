// Libraries
import styled from "styled-components";

export const Container = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 180px;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Profile = styled.div`
  flex-shrink: 0;
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

export const MenuScroll = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 4px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;

  @media (max-width: 768px) {
    max-height: calc(100vh - 80px);
    overflow-y: auto;
  }
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