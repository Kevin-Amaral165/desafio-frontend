import styled from "styled-components";

type ContainerProps = {
  width: number;
};

export const Container = styled.div<ContainerProps>`
  width: ${({ width }) => width}px;
  height: 100vh;

  min-width: 200px;
  max-width: 400px;

  flex-shrink: 0;
  
  padding: 16px;
  border-right: 1px solid #e5e7eb;
  background: #fff;

  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  margin-bottom: 24px;
  position: relative;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const Status = styled.div`
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 30px;
  border: 2px solid white;
`;

export const MenuGroup = styled.div`
  margin-bottom: 12px;
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #f3f4f6;
  }
`;

export const SubMenuItem = styled.div<{ active?: boolean }>`
  padding: 6px 16px;
  margin-left: 8px;
  font-size: 14px;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  background: ${({ active }) => (active ? "#e0e7ff" : "transparent")};
  color: ${({ active }) => (active ? "#3730a3" : "inherit")};

  &:hover {
    background: #f3f4f6;
  }
`;

export const Count = styled.span`
  font-size: 12px;
  color: #6b7280;
`;