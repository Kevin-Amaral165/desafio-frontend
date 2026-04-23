// Libraries
import { useEffect, type JSX } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import "./i18n";

// Pages
import { LoginPage } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";

// Routes
import { ProtectedRoute } from "./components/routes/ProtectedRoute";

// Store
import { useThemeStore } from "./store/theme.store";
import { useLanguageStore } from "./store/language.store";

// Theme
import type { ThemeType } from "./theme/theme.types";
import { ThemeStyle } from "./theme/theme.style";
import type { Language, ThemeMode } from "./enum/enum";
import { themeMap } from "./theme/themeMap";

export default function App(): JSX.Element {
  const mode: ThemeMode = useThemeStore((state) => state.mode);
  const theme: ThemeType = themeMap[mode];

  const language: Language = useLanguageStore((state) => state.language);

  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeStyle />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}