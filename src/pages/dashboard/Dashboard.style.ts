// Libraries
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 16px;
  overflow: auto;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
`;

export const Divider = styled.div`
  width: 5px;
  cursor: col-resize;
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;