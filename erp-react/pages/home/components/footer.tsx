import { Container, Row, Col } from 'react-bootstrap';
import { FooterSection } from '../styles';

const Footer = () => (
  <FooterSection>
    <Container>
      <Row>
        <Col md={4}>
          <h5>ERP Cloud</h5>
          <p>Solução completa de gestão empresarial na nuvem.</p>
        </Col>
        <Col md={4}>
          <h5>Links Rápidos</h5>
          <ul className="list-unstyled">
            <li><a href="#features" className="text-white">Funcionalidades</a></li>
            <li><a href="#pricing" className="text-white">Preços</a></li>
            <li><a href="#contact" className="text-white">Contato</a></li>
          </ul>
        </Col>
        <Col md={4}>
          <h5>Fale Conosco</h5>
          <address>
            <p>contato@erpcloud.com<br />
            +55 (11) 98765-4321</p>
          </address>
        </Col>
      </Row>
      <hr className="bg-light" />
      <p className="text-center mb-0">&copy; {new Date().getFullYear()} ERP Cloud. Todos os direitos reservados.</p>
    </Container>
  </FooterSection>
);

export default Footer;
