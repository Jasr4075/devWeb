
import React, { useState } from 'react';
import StatCard from '@/components/StatCard';
import LucroChart from '@/components/LucroChart';
import { getTotalLucro, getMediaLucro, getMelhorMes, getPiorMes } from '@/utils/mockData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartBar, ChartLine, ArrowUp, ArrowDown } from 'lucide-react';

const Dashboard = () => {
  const [chartType, setChartType] = useState<'barra' | 'linha'>('barra');
  const totalLucro = getTotalLucro();
  const mediaLucro = getMediaLucro();
  const melhorMes = getMelhorMes();
  const piorMes = getPiorMes();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Financeiro</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Lucro Total Anual"
          value={totalLucro}
          description="Soma de todos os lucros mensais"
          icon={<ArrowUp className="text-success h-4 w-4" />}
          change={12}
        />
        
        <StatCard
          title="Média Mensal"
          value={mediaLucro}
          description="Média de lucro mensal"
          change={5}
        />
        
        <StatCard
          title="Melhor Mês"
          value={melhorMes.valor}
          description={`${melhorMes.mes} foi o melhor mês`}
          icon={<ArrowUp className="text-success h-4 w-4" />}
          change={15}
        />
        
        <StatCard
          title="Pior Mês"
          value={piorMes.valor}
          description={`${piorMes.mes} foi o pior mês`}
          icon={<ArrowDown className="text-destructive h-4 w-4" />}
          change={-8}
        />
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle>Evolução Financeira</CardTitle>
            <Tabs defaultValue="barra" className="w-[200px]" onValueChange={(value) => setChartType(value as 'barra' | 'linha')}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="barra" className="flex items-center gap-2">
                  <ChartBar className="h-4 w-4" />
                  <span>Barras</span>
                </TabsTrigger>
                <TabsTrigger value="linha" className="flex items-center gap-2">
                  <ChartLine className="h-4 w-4" />
                  <span>Linhas</span>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <CardDescription>
            Acompanhe a evolução de receitas, despesas e lucros ao longo do ano
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LucroChart tipo={chartType} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
