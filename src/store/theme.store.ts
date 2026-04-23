// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Enum
import { ThemeMode } from "../enum/enum";

type ThemeState = {
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: ThemeMode.LIGHT,

      toggleTheme: () =>
        set((state) => ({
          mode:
            state.mode === ThemeMode.LIGHT
              ? ThemeMode.DARK
              : ThemeMode.LIGHT,
        })),

      setTheme: (mode) => set({ mode }),
    }),
    {
      name: "theme-storage",
    }
  )
);