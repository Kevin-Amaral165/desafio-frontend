// ThemeStyle.ts
import { createGlobalStyle } from "styled-components";

export const ThemeStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    transition: 0.2s;
    overflow: hidden;
  }
`;