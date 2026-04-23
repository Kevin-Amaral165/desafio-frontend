import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Store
import { useAuthStore } from "../../store/auth.store";

// Styles
import { Container, FormWrapper } from "./Login.style";

export function LoginPage() {
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
      setError("Usuário ou senha inválidos");
    }
  };

  return (
    <Container>
      <FormWrapper>
        <h1>Login</h1>

        {/* dica pro avaliador */}
        <span style={{ textAlign: "center", fontSize: 13, color: "#6b7280" }}>
          Use: admin / admin
        </span>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>

          {error && <p>{error}</p>}
        </form>
      </FormWrapper>
    </Container>
  );
}