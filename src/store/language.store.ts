// Libraries
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Enum
import { Language } from "../enum/enum";

// Translation
import i18n from "../i18n";

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
        i18n.changeLanguage(language);
      },
    }),
    {
      name: "language-storage",
    }
  )
);