
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { monthlyData } from '@/utils/mockData';

const DataTable = () => {
  // Função para formatar valores monetários
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Relatório Financeiro Detalhado</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mês</TableHead>
              <TableHead>Receitas</TableHead>
              <TableHead>Despesas</TableHead>
              <TableHead>Lucro</TableHead>
              <TableHead>Margem</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {monthlyData.map((item) => (
              <TableRow key={item.mes}>
                <TableCell className="font-medium">{item.mes}</TableCell>
                <TableCell>{formatCurrency(item.receitas)}</TableCell>
                <TableCell>{formatCurrency(item.despesas)}</TableCell>
                <TableCell className="font-medium">{formatCurrency(item.lucro)}</TableCell>
                <TableCell>{((item.lucro / item.receitas) * 100).toFixed(2)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DataTable;
