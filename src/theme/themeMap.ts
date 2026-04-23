// Enum
import { ThemeMode } from "../enum/enum";

// Theme
import { lightTheme, darkTheme } from "./theme";
import type { ThemeType } from "./theme.types";

export const themeMap: Record<ThemeMode, ThemeType> = {
  [ThemeMode.LIGHT]: lightTheme,
  [ThemeMode.DARK]: darkTheme,
};