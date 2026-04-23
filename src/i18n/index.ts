// Libraries
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Language
import pt from "./locales/pt/common.json";
import en from "./locales/en/common.json";

// Enum
import type { Language } from "../enum/enum";

// Store
import { useLanguageStore } from "../store/language.store";

const language: Language = useLanguageStore.getState().language;

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  lng: language,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;