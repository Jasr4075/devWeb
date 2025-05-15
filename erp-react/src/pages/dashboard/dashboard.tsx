import React, { useState } from 'react';
import { 
  ButtonGroup, 
  Col, 
  Card, 
  CardHeader 
} from 'react-bootstrap';
import { 
  ArrowUp, 
  ArrowDown, 
  BarChartFill, 
  GraphUp, 
  CashStack, 
  CurrencyDollar, 
  CalendarRange, 
  CalendarEvent 
} from 'react-bootstrap-icons';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend, 
  Filler 
} from 'chart.js';
import { 
  DashboardContainer, 
  HeaderContainer, 
  StatsGrid, 
  StyledCard, 
  CardTitle, 
  CardValue, 
  CardFooter, 
  IconContainer, 
  ChangeText, 
  CardDescription, 
  MainCard, 
  ChartContainer, 
  StyledToggleButton 
} from './styledComponents';
import { 
  Bar, 
  Line 
} from 'react-chartjs-2'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type MesData = {
  mes: string;
  valor: number;
};

type StatCardProps = {
  title: string;
  value: number;
  description?: string;
  icon?: React.ReactNode;
  change?: number;
  color?: string;
};

const chartData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  datasets: [
    {
      label: 'Lucro',
      data: [4000, 9000, 6000, 7000, 6500, 7000, 7000, 8000, 9000, 9000, 13000, 13000],
      backgroundColor: 'rgba(54, 162, 235, 0.7)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true
    },
    {
      label: 'Despesas',
      data: [8000, 10000, 9000, 11000, 9500, 12000, 10000, 13000, 11000, 14000, 12000, 15000],
      backgroundColor: 'rgba(255, 99, 132, 0.7)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true
    },
    {
      label: 'Receitas',
      data: [12000, 19000, 15000, 18000, 16000, 19000, 17000, 21000, 20000, 23000, 25000, 28000],
      backgroundColor: 'rgba(100, 210, 180, 0.7)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 2,
      tension: 0.3,
      fill: true
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: {
          size: 14,
          family: "'Inter', sans-serif"
        },
        padding: 20,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    tooltip: {
      backgroundColor: 'rgba(30, 30, 30, 0.9)',
      titleFont: {
        size: 16,
        family: "'Inter', sans-serif"
      },
      bodyFont: {
        size: 14,
        family: "'Inter', sans-serif"
      },
      padding: 12,
      cornerRadius: 12,
      callbacks: {
        label: function (context: any) {
          return `${context.dataset.label}: ${context.raw.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)'
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        },
        callback: function (value: any) {
          return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        }
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: "'Inter', sans-serif"
        }
      }
    }
  },
  elements: {
    point: {
      radius: 4,
      hoverRadius: 6,
      backgroundColor: 'white',
      borderWidth: 2
    }
  }
};

const StatCard: React.FC<StatCardProps> = ({ title, value, description, icon, change, color = '#4e73df' }) => {
  return (
    <StyledCard $color={color}>
      <Card.Body>
        <CardTitle>{title}</CardTitle>
        <CardValue>
          {value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </CardValue>
        <CardFooter className="d-flex align-items-center">
          <IconContainer $color={color}>
            {icon}
          </IconContainer>
          <ChangeText $positive={change}>
            {change !== undefined && `${change > 0 ? '+' : ''}${change}%`} { /* Corrected $positive prop type */}
            {change && change > 0 ? <ArrowUp /> : <ArrowDown />}
          </ChangeText>
        </CardFooter>
        <CardDescription>{description}</CardDescription>
      </Card.Body>
    </StyledCard>
  );
};

const Dashboard: React.FC = () => {
  const [chartType, setChartType] = useState<'barra' | 'linha'>('barra');

  const totalLucro = 125000;
  const mediaLucro = 10416.67;
  const melhorMes: MesData = { mes: 'Novembro', valor: 18500 };
  const piorMes: MesData = { mes: 'Fevereiro', valor: 7500 };

  return (
    <DashboardContainer>
      <HeaderContainer>
        <h1>Dashboard Financeiro</h1>
        <p className="subtitle">Visão geral do desempenho financeiro</p>
      </HeaderContainer>

      <StatsGrid>
        <Col md={6} lg={3}>
          <StatCard
            title="Lucro Total Anual"
            value={totalLucro}
            description="Total em 12 meses"
            icon={<CashStack size={20} />}
            change={12}
            color="#4e73df"
          />
        </Col>

        <Col md={6} lg={3}>
          <StatCard
            title="Média Mensal"
            value={mediaLucro}
            description="Lucro médio por mês"
            icon={<CurrencyDollar size={20} />}
            change={5}
            color="#1cc88a"
          />
        </Col>

        <Col md={6} lg={3}>
          <StatCard
            title="Melhor Mês"
            value={melhorMes.valor}
            description={`${melhorMes.mes} com maior lucro`}
            icon={<CalendarRange size={20} />}
            change={15}
            color="#36b9cc"
          />
        </Col>

        <Col md={6} lg={3}>
          <StatCard
            title="Pior Mês"
            value={piorMes.valor}
            description={`${piorMes.mes} com menor lucro`}
            icon={<CalendarEvent size={20} />}
            change={-8}
            color="#f6c23e"
          />
        </Col>
      </StatsGrid>

      <MainCard>
        <Card.Body>
          <CardHeader>
            <div>
              <h2>Evolução Financeira</h2>
              <p>Acompanhe a evolução de receitas, despesas e lucros ao longo do ano</p>
            </div>
            <ButtonGroup>
              <StyledToggleButton
                id="tbg-btn-1"
                value="barra"
                type="radio"
                variant="outline-primary"
                checked={chartType === 'barra'}
                onChange={() => setChartType('barra')}
                $active={chartType === 'barra'}
              >
                <BarChartFill className="me-2" />
                Barras
              </StyledToggleButton>
              <StyledToggleButton
                id="tbg-btn-2"
                value="linha"
                type="radio"
                variant="outline-primary"
                checked={chartType === 'linha'}
                onChange={() => setChartType('linha')}
                $active={chartType === 'linha'}
              >
                <GraphUp className="me-2" />
                Linhas
              </StyledToggleButton>
            </ButtonGroup>
          </CardHeader>

          <ChartContainer>
            {chartType === 'barra' ? (
              <Bar data={chartData} options={chartOptions} />
            ) : (
              <Line data={chartData} options={chartOptions} />
            )}
          </ChartContainer>

        </Card.Body>
      </MainCard>
    </DashboardContainer>
  );
};

export default Dashboard;