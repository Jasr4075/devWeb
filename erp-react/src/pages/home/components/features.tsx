import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  CurrencyExchange,
  Inventory,
  ShoppingCart,
  Assignment,
  People,
  BarChart
} from '@mui/icons-material';
import { FeatureCard, FeatureIcon } from '../styles';

const features = [
  {
    icon: <CurrencyExchange fontSize="inherit" />,
    title: 'Gestão Financeira',
    text: 'Controle de contas a pagar/receber, fluxo de caixa, conciliação bancária e relatórios financeiros.'
  },
  {
    icon: <Inventory fontSize="inherit" />,
    title: 'Controle de Estoque',
    text: 'Acompanhe entradas e saídas, gerencie inventário, rastreie produtos e integre com pedidos de venda/compra.'
  },
  {
    icon: <ShoppingCart fontSize="inherit" />,
    title: 'Gestão de Vendas',
    text: 'Emissão de pedidos, integração com NF-e, controle de comissões e metas de vendedores.'
  },
  {
    icon: <Assignment fontSize="inherit" />,
    title: 'Gestão de Compras',
    text: 'Solicitações de compra, ordens de compra, gerenciamento de fornecedores e cotações.'
  },
  {
    icon: <People fontSize="inherit" />,
    title: 'Gestão de Projetos',
    text: 'Cronogramas, tarefas, alocação de recursos e acompanhamento de progresso.'
  },
  {
    icon: <BarChart fontSize="inherit" />,
    title: 'Dashboards & Relatórios',
    text: 'Visualização de indicadores, gráficos e relatórios personalizáveis.'
  }
];

const Features = () => (
  <Container id="features">
    <h2 className="text-center mb-5">Funcionalidades Poderosas para Seu Negócio</h2>
    <Row className="g-4">
      {features.map((feature, index) => (
        <Col md={4} key={index}>
          <FeatureCard>
            <Card.Body className="text-center">
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <Card.Title>{feature.title}</Card.Title>
              <Card.Text>{feature.text}</Card.Text>
            </Card.Body>
          </FeatureCard>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Features;
