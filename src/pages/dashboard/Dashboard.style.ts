import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow: auto;
`;

export const Divider = styled.div`
  width: 5px;
  cursor: col-resize;
  background: transparent;
  position: relative;

  &:hover {
    background: #c7d2fe;
  }
`;