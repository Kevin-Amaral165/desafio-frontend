// Libraries
import { type JSX } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Translation
import "./i18n";

// Store
import { useThemeStore } from "./store/theme.store";

// Theme
import { themeMap } from "./theme/themeMap";
import { ThemeStyle } from "./theme/theme.style";

// Types
import type { ThemeType } from "./theme/theme.types";

// Enum
import type { ThemeMode } from "./enum/enum";

// Pages
import { LoginPage } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { ProtectedRoute } from "./components/routes/ProtectedRoute";

export default function App(): JSX.Element {
  const mode: ThemeMode = useThemeStore((state) => state.mode);
  const theme: ThemeType = themeMap[mode];

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