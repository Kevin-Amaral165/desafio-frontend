// Libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Store
import { useAuthStore } from "../../store/auth.store";

// Styles
import { Container, FormWrapper } from "./Login.style";

// Types
import type { LoginState } from "./Login.types";

export function LoginPage() {
  const { t } = useTranslation();

    const [state, setState] = useState<LoginState>({
      username: "",
      password: "",
      error: "",
    });

  const navigate: (path: string) => void = useNavigate();
  const login: (username: string, password: string) => boolean = useAuthStore((state) => state.login);


  const handleSubmit: (e: React.FormEvent) => void = (e: React.FormEvent) => {
    e.preventDefault();

    const success: boolean = login(state.username, state.password);

    if (success) {
      navigate("/dashboard");
    } else {
      setState((prevState) => ({ ...prevState, error: t("login.error") }));
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h1>{t("login.title")}</h1>

        <span style={{ textAlign: "center", fontSize: 13, color: "#6b7280" }}>
          User: admin / admin
        </span>

        <form onSubmit={handleSubmit}>
          <input
            placeholder={t("login.username")}
            value={state.username}
            onChange={(e) => setState((prevState) => ({ ...prevState, username: e.target.value }))}
          />

          <input
            type="password"
            placeholder={t("login.password")}
            value={state.password}
            onChange={(e) => setState((prevState) => ({ ...prevState, password: e.target.value }))}
          />

          <button type="submit">{t("login.button")}</button>

          {state.error && <p>{state.error}</p>}
        </form>
      </FormWrapper>
    </Container>
  );
}