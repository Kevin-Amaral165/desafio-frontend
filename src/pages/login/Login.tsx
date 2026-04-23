import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Store
import { useAuthStore } from "../../store/auth.store";

// Styles
import { Container, FormWrapper } from "./Login.style";

export function LoginPage() {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const success = login(username, password);

    if (success) {
      navigate("/dashboard");
    } else {
      setError(t("login.error"));
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h1>{t("login.title")}</h1>

        <span style={{ textAlign: "center", fontSize: 13, color: "#6b7280" }}>
          Use: admin / admin
        </span>

        <form onSubmit={handleSubmit}>
          <input
            placeholder={t("login.username")}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder={t("login.password")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">{t("login.button")}</button>

          {error && <p>{error}</p>}
        </form>
      </FormWrapper>
    </Container>
  );
}