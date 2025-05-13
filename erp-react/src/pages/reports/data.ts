// Data
export const monthlyData = [
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
  
export const totalProfit = monthlyData.reduce((sum, month) => sum + month.profit, 0);