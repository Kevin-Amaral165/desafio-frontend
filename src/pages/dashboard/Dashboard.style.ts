// Libraries
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  min-height: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  overflow: hidden;

  padding: 16px;
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 768px) {
    padding: 8px;
  }
`

export const Divider = styled.div`
  width: 5px;
  cursor: col-resize;
  background: transparent;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;