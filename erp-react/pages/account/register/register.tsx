import { Container, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { RegisterWrapper, StyledCard } from "./styledComponents";

const Register = () => {
  return (
    <RegisterWrapper>
      <Container>
        <StyledCard className="p-4">
          <h2 className="text-center mb-4" style={{ fontWeight: 600 }}>
            Registrar
          </h2>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Digite seu nome"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Digite seu email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Digite sua senha"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Digite seu telefone"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Digite seu username"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100">
              Registrar
            </Button>
          </Form>
        </StyledCard>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;