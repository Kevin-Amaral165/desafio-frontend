import { useTranslation } from "react-i18next";

// Enum
import { ThemeMode, Language } from "../../enum/enum";

// Stores
import { useThemeStore } from "../../store/theme.store";
import { useLanguageStore } from "../../store/language.store";

// Styles
import { Container, Left, Right } from "./Toolbar.style";

export function Toolbar() {
  const { t, i18n } = useTranslation();

  // THEME
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const mode = useThemeStore((state) => state.mode);

  // LANGUAGE
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const handleToggleLanguage = () => {
    const newLang =
      language === Language.PT ? Language.EN : Language.PT;

    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <Container>
      <Left>
        <button>{t("toolbar.archive")}</button>
      </Left>

      <Right>
        <button onClick={handleToggleLanguage}>
          {language === Language.PT ? "EN 🇺🇸" : "PT 🇧🇷"}
        </button>

        <button onClick={toggleTheme}>
          {mode === ThemeMode.LIGHT
            ? `🌙 ${t("toolbar.dark")}`
            : `☀️ ${t("toolbar.light")}`}
        </button>
      </Right>
    </Container>
  );
}