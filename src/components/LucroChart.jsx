
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import { monthlyData } from '@/utils/mockData';

const formatCurrency = (value) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0
  }).format(value);
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md">
        <p className="font-bold">{`${label}`}</p>
        <p className="text-success">
          {`Lucro: ${formatCurrency(payload[0].value)}`}
        </p>
        <p className="text-info">
          {`Receitas: ${formatCurrency(payload[1]?.value || 0)}`}
        </p>
        <p className="text-warning">
          {`Despesas: ${formatCurrency(payload[2]?.value || 0)}`}
        </p>
      </div>
    );
  }
  return null;
};

const LucroChart = ({ tipo = 'barra' }) => {
  return (
    <Card className="w-full h-[400px]">
      <CardHeader>
        <CardTitle>Evolução Financeira Mensal</CardTitle>
      </CardHeader>
      <CardContent className="h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          {tipo === 'barra' ? (
            <BarChart
              data={monthlyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis tickFormatter={(value) => `R$${value/1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar dataKey="lucro" fill="#10B981" name="Lucro" />
              <Bar dataKey="receitas" fill="#3B82F6" name="Receitas" />
              <Bar dataKey="despesas" fill="#F59E0B" name="Despesas" />
            </BarChart>
          ) : (
            <LineChart
              data={monthlyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis tickFormatter={(value) => `R$${value/1000}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Line type="monotone" dataKey="lucro" stroke="#10B981" name="Lucro" strokeWidth={2} />
              <Line type="monotone" dataKey="receitas" stroke="#3B82F6" name="Receitas" strokeWidth={2} />
              <Line type="monotone" dataKey="despesas" stroke="#F59E0B" name="Despesas" strokeWidth={2} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default LucroChart;
