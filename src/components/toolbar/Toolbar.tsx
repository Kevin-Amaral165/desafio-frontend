// Enum
import { ThemeMode } from "../../enum/enum";

// Store
import { useThemeStore } from "../../store/theme.store";

// Styles
import { Container, Left, Right } from "./Toolbar.style";

export function Toolbar() {
  const toggleTheme: () => void = useThemeStore((state) => state.toggleTheme);
  const mode: ThemeMode = useThemeStore((state) => state.mode);

  return (
    <Container>
      <Left>
        <button>Arquivar</button>
      </Left>

      <Right>
        <button onClick={toggleTheme}>
          {mode === ThemeMode.LIGHT ? "🌙 Dark" : "☀️ Light"}
        </button>
      </Right>
    </Container>
  );
}