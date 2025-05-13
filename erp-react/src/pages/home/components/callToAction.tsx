import { Container, Button } from 'react-bootstrap';

const CallToAction = () => (
  <section className="py-5">
    <Container className="text-center">
      <h2>Pronto para Transformar Seu Negócio?</h2>
      <p className="lead mb-4">
        Junte-se a milhares de empresas que confiam no ERP Cloud para gerenciar suas operações.
      </p>
      <Button variant="primary" size="lg" className="me-2">Iniciar Teste Gratuito</Button>
      <Button variant="outline-primary" size="lg">Agendar Demonstração</Button>
    </Container>
  </section>
);

export default CallToAction;
