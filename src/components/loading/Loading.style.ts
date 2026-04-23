// Libraries
import styled from "styled-components";

export const LoadingContainer = styled.div<{ fullHeight?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "auto")};
  min-height: ${({ fullHeight }) => (fullHeight ? "200px" : "auto")};
`;

export const Spinner = styled.div`
  width: 28px;
  height: 28px;
  border: 3px solid #ddd;
  border-top: 3px solid #333;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Text = styled.span`
  margin-top: 10px;
  font-size: 13px;
  color: #666;
`;