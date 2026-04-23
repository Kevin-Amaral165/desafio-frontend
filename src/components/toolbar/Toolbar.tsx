// Libraries
import { useTranslation } from "react-i18next";

// Store
import { useThemeStore } from "../../store/theme.store";
import { useLanguageStore } from "../../store/language.store";

// Enum
import { Language, ThemeMode, ViewMode } from "../../enum/enum";

// Style
import {
  Container,
  Left,
  Right,
  Button,
} from "./Toolbar.style";

// Types
import type { ToolbarProps } from "./Toolbar.types";

export function Toolbar({
  onArchive,
  onRestore,
  setView,
   view,
}: ToolbarProps) {
  const { t } = useTranslation();

  const theme: ThemeMode = useThemeStore((s) => s.mode);
  const toggleTheme: () => void = useThemeStore((s) => s.toggleTheme);
  const language: Language = useLanguageStore((s) => s.language);
  const setLanguage: (lang: Language) => void = useLanguageStore((s) => s.setLanguage);

  return (
    <Container>
      <Left>
        {view === ViewMode.TRASH ? (
          <Button onClick={onRestore}>
            ♻ {t("toolbar.restore")}
          </Button>
        ) : (
          <Button onClick={onArchive}>
            {t("toolbar.archive")}
          </Button>
        )}
      </Left>

      <Right>
        <Button onClick={() => setView?.(ViewMode.INBOX)}>
          📥 {t("toolbar.inbox")}
        </Button>

        <Button onClick={() => setView?.(ViewMode.TRASH)}>
          🗑 {t("toolbar.trash")}
        </Button>

        <Button
          onClick={() =>
            setLanguage(
              language === Language.PT ? Language.EN : Language.PT
            )
          }
        >
          🌐 {language === Language.PT ? "PT-BR" : "EN"}
        </Button>

        <Button onClick={toggleTheme}>
          {theme === ThemeMode.LIGHT
            ? `🌙 ${t("toolbar.dark")}`
            : `☀️ ${t("toolbar.light")}`}
        </Button>
      </Right>
    </Container>
  );
}