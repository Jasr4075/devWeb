
interface MonthlyData {
  mes: string;
  receitas: number;
  despesas: number;
  lucro: number;
}

export const monthlyData: MonthlyData[] = [
  { mes: "Jan", receitas: 45000, despesas: 32000, lucro: 13000 },
  { mes: "Fev", receitas: 51000, despesas: 35000, lucro: 16000 },
  { mes: "Mar", receitas: 48500, despesas: 33000, lucro: 15500 },
  { mes: "Abr", receitas: 52000, despesas: 36000, lucro: 16000 },
  { mes: "Mai", receitas: 56000, despesas: 38000, lucro: 18000 },
  { mes: "Jun", receitas: 54000, despesas: 36500, lucro: 17500 },
  { mes: "Jul", receitas: 58000, despesas: 39000, lucro: 19000 },
  { mes: "Ago", receitas: 61000, despesas: 40000, lucro: 21000 },
  { mes: "Set", receitas: 59000, despesas: 39500, lucro: 19500 },
  { mes: "Out", receitas: 63000, despesas: 41000, lucro: 22000 },
  { mes: "Nov", receitas: 67000, despesas: 43000, lucro: 24000 },
  { mes: "Dez", receitas: 72000, despesas: 46000, lucro: 26000 },
];

export const getTotalLucro = (): number => {
  return monthlyData.reduce((acc, month) => acc + month.lucro, 0);
};

export const getMediaLucro = (): number => {
  return getTotalLucro() / monthlyData.length;
};

export const getMelhorMes = (): { mes: string; valor: number } => {
  const melhorMes = monthlyData.reduce((best, current) => 
    current.lucro > best.lucro ? current : best, monthlyData[0]);
  
  return { mes: melhorMes.mes, valor: melhorMes.lucro };
};

export const getPiorMes = (): { mes: string; valor: number } => {
  const piorMes = monthlyData.reduce((worst, current) => 
    current.lucro < worst.lucro ? current : worst, monthlyData[0]);
  
  return { mes: piorMes.mes, valor: piorMes.lucro };
};
