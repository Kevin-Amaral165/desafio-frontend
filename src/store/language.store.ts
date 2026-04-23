// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Enum
import { Language } from "../enum/enum";

type LanguageState = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: Language.PT,

      setLanguage: (language) => {
        set({ language });
      },
    }),
    {
      name: "language-storage",
    }
  )
);