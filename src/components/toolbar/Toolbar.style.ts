import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #e5e7eb;
  background: white;
`;

export const Left = styled.div`
  display: flex;
  gap: 8px;

  button {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #d1d5db;
    background: #fff;
    cursor: pointer;

    &:hover {
      background: #f3f4f6;
    }
  }
`;

export const Right = styled.div``;

export const Search = styled.input`
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid #d1d5db;
`;