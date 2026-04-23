// Types
import type { ThemeType } from "./theme.types";

export const lightTheme: ThemeType = {
  colors: {
    bg: "#ffffff",
    text: "#111827",
    primary: "#2563eb",
    border: "#e5e7eb",
    surface: "#f9fafb",

    // 🔥 novos (alto contraste)
    hover: "#eaf3ff",
    selected: "#dbeafe",

    avatarBg: "#334155",
    avatarSelected: "#2563eb",

    checkboxBg: "#2563eb",
    checkboxBorder: "#2563eb",
  },
};

export const darkTheme: ThemeType = {
  colors: {
    bg: "#111827",
    text: "#f9fafb",
    primary: "#818cf8",
    border: "#374151",
    surface: "#1f2937",

    hover: "#1f2a44",
    selected: "#24324f",

    avatarBg: "#475569",
    avatarSelected: "#818cf8",

    checkboxBg: "#818cf8",
    checkboxBorder: "#818cf8",
  },
};