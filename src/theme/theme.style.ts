// Libraries
import { createGlobalStyle } from "styled-components";

export const ThemeStyle: ReturnType<typeof createGlobalStyle> = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};

    transition: 0.2s;
  }
`;