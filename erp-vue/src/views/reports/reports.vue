<template>
    <div class="report-container">
      <div class="report-header">
        <h1>Relatório Financeiro</h1>
        <p>Relatório Anual de Lucros - Visão detalhada dos resultados financeiros da empresa</p>
      </div>
      
      <div class="row">
        <div class="col-lg-12">
          <div class="total-profit-card">
            <div class="card-body">
              <h3 class="card-title">Lucro Total Anual</h3>
              <h2 class="profit-value">
                {{ formatCurrency(totalProfit) }}
              </h2>
              <div class="d-flex align-items-center">
                <span class="status-badge">
                  <CheckCircle :size="16" />
                  Aprovado
                </span>
                <span class="ms-3 text-muted">Jan - Dez 2023</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-12">
          <div class="summary-card">
            <div class="card-body">
              <h3 class="card-title">Relatório Financeiro Detalhado</h3>
              
              <div class="table-responsive">
                <table class="report-table">
                  <thead>
                    <tr>
                      <th>Mês</th>
                      <th>Receitas</th>
                      <th>Despesas</th>
                      <th>Lucro</th>
                      <th>Margem</th>
                      <th>Tendência</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(data, index) in monthlyData" :key="data.month">
                      <td>{{ data.month }}</td>
                      <td>{{ formatCurrency(data.revenue) }}</td>
                      <td>{{ formatCurrency(data.expenses) }}</td>
                      <td :class="{ 'profit-positive': true }">
                        {{ formatCurrency(data.profit) }}
                      </td>
                      <td>{{ data.margin.toFixed(2) }}%</td>
                      <td>
                        <ChevronUp v-if="getTrend(index) === 'up'" color="#1cc88a" />
                        <ChevronDown v-if="getTrend(index) === 'down'" color="#e74a3b" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col-lg-12">
          <div class="summary-section">
            <h3>Resumo Anual</h3>
            <p>
              Este relatório apresenta os resultados financeiros da empresa durante o ano de 2023, 
              destacando os lucros obtidos em cada mês e a tendência geral da operação.
            </p>
            
            <ul>
              <li>O lucro total anual foi de {{ formatCurrency(totalProfit) }}</li>
              <li>Observamos um crescimento consistente nos lucros ao longo do ano</li>
              <li>O último trimestre apresentou os melhores resultados</li>
              <li>As despesas foram mantidas sob controle, mesmo com o aumento das receitas</li>
              <li>
                Recomendações: Continuar com a estratégia atual de gestão financeira, focando na 
                expansão das receitas enquanto mantém o controle efetivo das despesas.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  import { CheckCircle, ChevronUp, ChevronDown } from 'lucide-vue-next';
  
  // Dados
  const monthlyData = [
    { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000, margin: 28.89 },
    { month: 'Fev', revenue: 51000, expenses: 35000, profit: 16000, margin: 31.37 },
    { month: 'Mar', revenue: 48500, expenses: 33000, profit: 15500, margin: 31.96 },
    { month: 'Abr', revenue: 52000, expenses: 36000, profit: 16000, margin: 30.77 },
    { month: 'Mai', revenue: 56000, expenses: 38000, profit: 18000, margin: 32.14 },
    { month: 'Jun', revenue: 54000, expenses: 36500, profit: 17500, margin: 32.41 },
    { month: 'Jul', revenue: 58000, expenses: 39000, profit: 19000, margin: 32.76 },
    { month: 'Ago', revenue: 61000, expenses: 40000, profit: 21000, margin: 34.43 },
    { month: 'Set', revenue: 59000, expenses: 39500, profit: 19500, margin: 33.05 },
    { month: 'Out', revenue: 63000, expenses: 41000, profit: 22000, margin: 34.92 },
    { month: 'Nov', revenue: 67000, expenses: 43000, profit: 24000, margin: 35.82 },
    { month: 'Dez', revenue: 72000, expenses: 46000, profit: 26000, margin: 36.11 },
  ];
  
  // Calcular o lucro total
  const totalProfit = computed(() => {
    return monthlyData.reduce((sum, month) => sum + month.profit, 0);
  });
  
  // Formatador de moeda
  const formatCurrency = (value: number): string => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };
  
  // Determinar a tendência
  const getTrend = (index: number): 'up' | 'down' | 'neutral' => {
    if (index === 0) return 'neutral';
    
    const currentProfit = monthlyData[index].profit;
    const previousProfit = monthlyData[index - 1].profit;
    
    return currentProfit > previousProfit ? 'up' : 'down';
  };
  </script>
  
  <style scoped>
  /* Estilos gerais */
  .report-container {
    padding: 2rem;
    font-family: 'Inter', sans-serif;
    max-width: 1140px;
    margin: 0 auto;
  }
  
  .report-header {
    margin-bottom: 2rem;
  }
  
  .report-header h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 0.5rem;
  }
  
  .report-header p {
    color: #6c757d;
    font-size: 1rem;
  }
  
  /* Cards */
  .summary-card, .total-profit-card {
    border-radius: 12px;
    border: none;
    box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
    margin-bottom: 2rem;
    background-color: white;
  }
  
  .total-profit-card {
    border-left: 4px solid #4e73df;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1rem;
    font-weight: 600;
    color: #5a5c69;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  
  .profit-value {
    font-size: 2rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 1.5rem;
  }
  
  .status-badge {
    display: inline-flex;
    align-items: center;
    padding: 0.35rem 0.75rem;
    background-color: #d1e7dd;
    color: #0f5132;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 600;
  }
  
  .status-badge svg {
    margin-right: 0.5rem;
  }
  
  /* Tabela */
  .table-responsive {
    overflow-x: auto;
  }
  
  .report-table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse;
  }
  
  .report-table thead th {
    background-color: #f8f9fc;
    color: #5a5c69;
    font-weight: 600;
    border-bottom: 1px solid #e3e6f0;
    padding: 0.75rem;
    text-align: left;
  }
  
  .report-table tbody td {
    vertical-align: middle;
    padding: 0.75rem;
    border-bottom: 1px solid #e3e6f0;
  }
  
  .profit-positive {
    color: #1cc88a;
    font-weight: 500;
  }
  
  .profit-negative {
    color: #e74a3b;
    font-weight: 500;
  }
  
  /* Seção de resumo */
  .summary-section {
    background-color: #f8f9fc;
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 2rem;
  }
  
  .summary-section h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2e3a59;
    margin-bottom: 1rem;
  }
  
  .summary-section ul {
    padding-left: 1.5rem;
  }
  
  .summary-section li {
    margin-bottom: 0.5rem;
  }
  
  /* Utilitários */
  .d-flex {
    display: flex;
  }
  
  .align-items-center {
    align-items: center;
  }
  
  .ms-3 {
    margin-left: 1rem;
  }
  
  .text-muted {
    color: #6c757d;
  }
  
  /* Grid */
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }
  
  .col-lg-12 {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
  
  @media (min-width: 992px) {
    .col-lg-12 {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  </style>