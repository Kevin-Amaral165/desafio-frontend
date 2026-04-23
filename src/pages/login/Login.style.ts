import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;

  background: ${({ theme }) => theme.colors.surface};
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  padding: 28px;

  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};

  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  input {
    padding: 10px 12px;
    border-radius: 8px;

    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  button {
    padding: 10px;
    border-radius: 8px;
    border: none;

    background: ${({ theme }) => theme.colors.primary};
    color: white;

    &:hover {
      opacity: 0.9;
    }
  }

  p {
    text-align: center;
    color: red;
  }
`;