import { Container, Row, Col, Button } from 'react-bootstrap';
import { HeroSection } from '../styles';

const HeroSectionComponent = () => (
  <HeroSection>
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <h1>Sua Empresa. Simplificada.</h1>
          <p className="lead">
            ERP Cloud é uma solução SaaS completa que simplifica as operações do seu negócio, 
            das finanças ao estoque, tudo em uma única plataforma.
          </p>
          <Button variant="light" size="lg" className="me-2">Começar Agora</Button>
          <Button variant="outline-light" size="lg">Saiba Mais</Button>
        </Col>
        <Col lg={6}>
          <img 
            src="src/assets/placeholder_600x400.png" 
            alt="Painel ERP" 
            className="img-fluid rounded shadow"
          />
        </Col>
      </Row>
    </Container>
  </HeroSection>
);

export default HeroSectionComponent;
