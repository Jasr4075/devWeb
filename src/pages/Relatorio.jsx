
import React from 'react';
import DataTable from '@/components/DataTable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getTotalLucro } from '@/utils/mockData';
import { FileText } from 'lucide-react';

const Relatorio = () => {
  const totalLucro = getTotalLucro();
  const dataAtual = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Relatório Financeiro</h1>
        <div className="bg-muted px-3 py-1 rounded-md text-sm text-muted-foreground">
          Dados atualizados em: {dataAtual}
        </div>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" />
            <div>
              <CardTitle>Relatório Anual de Lucros</CardTitle>
              <CardDescription>
                Visão detalhada dos resultados financeiros da empresa
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Lucro Total Anual</p>
                <p className="text-2xl font-bold text-primary">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalLucro)}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Período</p>
                <p className="text-2xl font-bold">Jan - Dez 2023</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-xl font-semibold text-success">Aprovado</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <DataTable />
      
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Resumo Anual</CardTitle>
        </CardHeader>
        <CardContent className="prose">
          <p>Este relatório apresenta os resultados financeiros da empresa durante o ano de 2023, destacando os lucros obtidos em cada mês e a tendência geral da operação.</p>
          
          <h4>Pontos Importantes:</h4>
          <ul>
            <li>O lucro total anual foi de {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(totalLucro)}</li>
            <li>Observamos um crescimento consistente nos lucros ao longo do ano</li>
            <li>O último trimestre apresentou os melhores resultados</li>
            <li>As despesas foram mantidas sob controle, mesmo com o aumento das receitas</li>
          </ul>
          
          <p>Recomendações: Continuar com a estratégia atual de gestão financeira, focando na expansão das receitas enquanto mantém o controle efetivo das despesas.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Relatorio;
