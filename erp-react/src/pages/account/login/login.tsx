import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Container, Card } from "react-bootstrap";
import { LoginWrapper, StyledCard, StyledForm } from './styles';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log("Credenciales enviadas:", credentials);
      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <LoginWrapper>
      <Container>
        <StyledCard className="p-4">
          <Card.Body>
            <h2 className="text-center mb-4" style={{ fontWeight: 600 }}>
              Iniciar Sesión
            </h2>
            <StyledForm onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  value={credentials.email}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <button
                className="btn btn-primary w-100 mb-3"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Carregando..." : "Login"}
              </button>

              <div className="text-center">
                <Link to="/register">
                  Não tem uma conta? Cadastre-se aqui
                </Link>
              </div>
            </StyledForm>
          </Card.Body>
        </StyledCard>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
