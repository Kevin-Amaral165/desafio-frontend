// Libraries
import type { JSX } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Pages
import { LoginPage } from "./pages/login/Login";
import { Dashboard } from "./pages/dashboard/Dashboard";

// Routes
import { ProtectedRoute } from "./components/routes/ProtectedRoute";

// Store
import { useThemeStore } from "./store/theme.store";

// Theme
import { type ThemeType } from "./theme/theme.types";
import { ThemeStyle } from "./theme/theme.style";
import type { ThemeMode } from "./enum/enum";
import { themeMap } from "./theme/themeMap";


export default function App(): JSX.Element {
  // Get theme mode from store
  const mode: ThemeMode = useThemeStore((state) => state.mode);

  // Get theme object based on mode
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