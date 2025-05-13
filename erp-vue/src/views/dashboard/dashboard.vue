<template>
    <div class="dashboard-container">
      <div class="header-container">
        <h1>Dashboard Financeiro</h1>
        <p class="subtitle">Visão geral do desempenho financeiro</p>
      </div>
  
      <div class="stats-grid">
        <div class="col-md-6 col-lg-3">
          <div class="stat-card" :style="{ borderLeftColor: '#4e73df' }">
            <div class="card-body">
              <div class="card-title">Lucro Total Anual</div>
              <div class="card-value">
                {{ formatCurrency(totalLucro) }}
              </div>
              <div class="card-footer">
                <div class="icon-container" :style="{ backgroundColor: '#4e73df20', color: '#4e73df' }">
                  <Banknote :size="20" />
                </div>
                <span class="change-text" :class="{ 'positive': 12 > 0 }">
                  +12%
                  <TrendingUp v-if="12 > 0" :size="16" />
                  <TrendingDown v-else :size="16" />
                </span>
              </div>
              <div class="card-description">Total em 12 meses</div>
            </div>
          </div>
        </div>
  
        <div class="col-md-6 col-lg-3">
          <div class="stat-card" :style="{ borderLeftColor: '#1cc88a' }">
            <div class="card-body">
              <div class="card-title">Média Mensal</div>
              <div class="card-value">
                {{ formatCurrency(mediaLucro) }}
              </div>
              <div class="card-footer">
                <div class="icon-container" :style="{ backgroundColor: '#1cc88a20', color: '#1cc88a' }">
                  <DollarSign :size="20" />
                </div>
                <span class="change-text" :class="{ 'positive': 5 > 0 }">
                  +5%
                  <TrendingUp v-if="5 > 0" :size="16" />
                  <TrendingDown v-else :size="16" />
                </span>
              </div>
              <div class="card-description">Lucro médio por mês</div>
            </div>
          </div>
        </div>
  
        <div class="col-md-6 col-lg-3">
          <div class="stat-card" :style="{ borderLeftColor: '#36b9cc' }">
            <div class="card-body">
              <div class="card-title">Melhor Mês</div>
              <div class="card-value">
                {{ formatCurrency(melhorMes.valor) }}
              </div>
              <div class="card-footer">
                <div class="icon-container" :style="{ backgroundColor: '#36b9cc20', color: '#36b9cc' }">
                  <CalendarRange :size="20" />
                </div>
                <span class="change-text" :class="{ 'positive': 15 > 0 }">
                  +15%
                  <TrendingUp v-if="15 > 0" :size="16" />
                  <TrendingDown v-else :size="16" />
                </span>
              </div>
              <div class="card-description">{{ melhorMes.mes }} com maior lucro</div>
            </div>
          </div>
        </div>
  
        <div class="col-md-6 col-lg-3">
          <div class="stat-card" :style="{ borderLeftColor: '#f6c23e' }">
            <div class="card-body">
              <div class="card-title">Pior Mês</div>
              <div class="card-value">
                {{ formatCurrency(piorMes.valor) }}
              </div>
              <div class="card-footer">
                <div class="icon-container" :style="{ backgroundColor: '#f6c23e20', color: '#f6c23e' }">
                  <Calendar :size="20" />
                </div>
                <span class="change-text" :class="{ 'negative': -8 < 0 }">
                  -8%
                  <TrendingUp v-if="-8 > 0" :size="16" />
                  <TrendingDown v-else :size="16" />
                </span>
              </div>
              <div class="card-description">{{ piorMes.mes }} com menor lucro</div>
            </div>
          </div>
        </div>
      </div>
  
      <div class="main-card">
        <div class="card-body">
          <div class="card-header">
            <div>
              <h2>Evolução Financeira</h2>
              <p>Acompanhe a evolução de receitas, despesas e lucros ao longo do ano</p>
            </div>
            <div class="button-group">
              <button 
                class="toggle-button" 
                :class="{ 'active': chartType === 'barra' }"
                @click="chartType = 'barra'"
              >
                <BarChart2 class="me-2" :size="18" />
                Barras
              </button>
              <button 
                class="toggle-button" 
                :class="{ 'active': chartType === 'linha' }"
                @click="chartType = 'linha'"
              >
                <LineChart class="me-2" :size="18" />
                Linhas
              </button>
            </div>
          </div>
  
          <div class="chart-container">
            <Bar v-if="chartType === 'barra'" :data="chartData" :options="chartOptions" />
            <Line v-else :data="chartData" :options="chartOptions" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
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
  import { Bar, Line } from 'vue-chartjs';
  import { 
    TrendingUp, 
    TrendingDown, 
    BarChart2, 
    LineChart, 
    Banknote, 
    DollarSign, 
    CalendarRange, 
    Calendar 
  } from 'lucide-vue-next';
  
  // Registrar componentes de Chart.js
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
  
  // Tipos para os dados
  interface MesData {
    mes: string;
    valor: number;
  }
  
  // Estado do componente
  const chartType = ref<'barra' | 'linha'>('barra');
  
  // Dados mock
  const totalLucro = ref(125000);
  const mediaLucro = ref(10416.67);
  const melhorMes = ref<MesData>({ mes: 'Novembro', valor: 18500 });
  const piorMes = ref<MesData>({ mes: 'Fevereiro', valor: 7500 });
  
  // Formatador de moeda
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  // Dados para os gráficos
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
  
  // Opciones para los gráficos
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
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
  </script>
  
  <style scoped>
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .dashboard-container {
    padding: 2rem 0;
    font-family: 'Inter', sans-serif;
    max-width: 1140px;
    margin: 0 auto;
    width: 100%;
  }
  
  .header-container {
    margin-bottom: 2.5rem;
    animation: fadeIn 0.6s ease-out;
  }
  
  .header-container h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 0.5rem;
  }
  
  .header-container .subtitle {
    color: #6c757d;
    font-size: 1.1rem;
    font-weight: 400;
  }
  
  .stats-grid {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px;
    gap: 1.5rem 0;
    margin-bottom: 2.5rem;
  }
  
  .col-md-6 {
    width: 50%;
    padding: 0 15px;
  }
  
  .col-lg-3 {
    width: 25%;
    padding: 0 15px;
  }
  
  @media (max-width: 992px) {
    .col-lg-3 {
      width: 50%;
    }
  }
  
  @media (max-width: 768px) {
    .col-md-6 {
      width: 100%;
    }
    .col-lg-3 {
      width: 100%;
    }
  }
  
  .stat-card {
    border-radius: 12px;
    border: none;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    border-left: 4px solid;
    animation: fadeIn 0.6s ease-out;
    background-color: white;
  }
  
  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1.5rem 0 rgba(58, 59, 69, 0.2);
  }
  
  .card-body {
    padding: 1.25rem;
  }
  
  .card-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: #5a5c69;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 0.75rem;
  }
  
  .card-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 1.5rem;
  }
  
  .card-footer {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  
  .icon-container {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
  }
  
  .change-text {
    display: flex;
    align-items: center;
    font-size: 0.9rem;
    font-weight: 500;
    color: #e74a3b;
  }
  
  .change-text.positive {
    color: #1cc88a;
  }
  
  .change-text.negative {
    color: #e74a3b;
  }
  
  .change-text svg {
    margin-left: 4px;
  }
  
  .card-description {
    color: #858796;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }
  
  .main-card {
    border-radius: 12px;
    border: none;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
    margin-top: 1.5rem;
    animation: fadeIn 0.6s ease-out 0.2s both;
    background-color: white;
  }
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1.25rem 1.25rem 0;
  }
  
  .card-header h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 0.25rem;
  }
  
  .card-header p {
    color: #6c757d;
    font-size: 0.95rem;
    margin-bottom: 0;
  }
  
  .button-group {
    display: flex;
    gap: 0.5rem;
  }
  
  .toggle-button {
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid #d1d3e2;
    color: #6e707e;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .toggle-button.active {
    color: #fff;
    background-color: #4e73df;
  }
  
  .toggle-button:hover {
    background-color: #f8f9fc;
    color: #4e73df;
  }
  
  .toggle-button.active:hover {
    background-color: #4e73df;
    color: #fff;
  }
  
  .toggle-button:focus {
    outline: none;
    box-shadow: none;
  }
  
  .me-2 {
    margin-right: 0.5rem;
  }
  
  .chart-container {
    height: 400px;
    background-color: #fff;
    border-radius: 10px;
    padding: 1.5rem;
    border: 1px solid #e3e6f0;
  }
  </style>