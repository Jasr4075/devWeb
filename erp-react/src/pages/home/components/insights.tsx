import { Container, Row, Col } from 'react-bootstrap';

const Insights = () => (
  <section className="py-5 bg-light">
    <Container>
      <Row className="align-items-center">
        <Col lg={6}>
          <img 
            src="src/assets/placeholder_500x350.png" 
            alt="Análises ERP" 
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col lg={6}>
          <h2>Insights Empresariais em Tempo Real</h2>
          <p className="lead">
            Tome decisões baseadas em dados com nossos painéis e ferramentas de análise.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2"><strong>Dashboards personalizáveis</strong> adaptados às necessidades do seu negócio</li>
            <li className="mb-2"><strong>Indicadores financeiros</strong> atualizados em tempo real</li>
            <li className="mb-2"><strong>Alertas de estoque</strong> para evitar falta de produtos</li>
            <li className="mb-2"><strong>Acompanhamento de desempenho</strong> de vendas por equipe ou vendedor</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Insights;
