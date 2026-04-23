import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 16px;

  background: linear-gradient(135deg, #eef2ff, #f9fafb);
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  padding: 28px;

  background: #ffffff;
  border-radius: 12px;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    color: #111827;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  input {
    padding: 10px 12px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    font-size: 14px;

    &:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
    }
  }

  button {
    padding: 10px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
    cursor: pointer;

    background: #6366f1;
    color: white;

    transition: 0.2s;

    &:hover {
      background: #4f46e5;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  p {
    text-align: center;
    font-size: 14px;
    color: red;
  }

  @media (min-width: 768px) {
    max-width: 400px;
    padding: 32px;

    h1 {
      font-size: 26px;
    }
  }

  @media (min-width: 1200px) {
    max-width: 420px;
    padding: 36px;

    h1 {
      font-size: 28px;
    }
  }
`;