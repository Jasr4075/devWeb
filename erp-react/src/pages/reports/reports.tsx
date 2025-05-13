import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { CheckCircle, ChevronUp, ChevronDown } from 'react-bootstrap-icons';
import { ReportContainer, ReportHeader, TotalProfitCard, CardTitle, ProfitValue, StatusBadge, ReportTable, ProfitCell, SummaryCard, SummarySection } from './styledComponent';
import { monthlyData, totalProfit } from './data';

const FinancialReport: React.FC = () => {
  return (
    <ReportContainer>
      <ReportHeader>
        <h1>Relatório Financeiro</h1>
        <p>Relatório Anual de Lucros - Visão detalhada dos resultados financeiros da empresa</p>
      </ReportHeader>
      
      <Row>
        <Col lg={12}>
          <TotalProfitCard>
            <Card.Body>
              <CardTitle>Lucro Total Anual</CardTitle>
              <ProfitValue>
                {totalProfit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </ProfitValue>
              <div className="d-flex align-items-center">
                <StatusBadge>
                  <CheckCircle size={16} />
                  Aprovado
                </StatusBadge>
                <span className="ms-3 text-muted">Jan - Dez 2023</span>
              </div>
            </Card.Body>
          </TotalProfitCard>
        </Col>
      </Row>
      
      <Row>
        <Col lg={12}>
          <SummaryCard>
            <Card.Body>
              <CardTitle>Relatório Financeiro Detalhado</CardTitle>
              
              <ReportTable responsive>
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
                  {monthlyData.map((data, index) => {
                    const previousProfit = index > 0 ? monthlyData[index - 1].profit : 0;
                    const trend = index > 0 ? data.profit > previousProfit ? 'up' : 'down' : 'neutral';
                    
                    return (
                      <tr key={data.month}>
                        <td>{data.month}</td>
                        <td>{data.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <td>{data.expenses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                        <ProfitCell positive={true}>
                          {data.profit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </ProfitCell>
                        <td>{data.margin.toFixed(2)}%</td>
                        <td>
                          {trend === 'up' && <ChevronUp color="#1cc88a" />}
                          {trend === 'down' && <ChevronDown color="#e74a3b" />}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </ReportTable>
            </Card.Body>
          </SummaryCard>
        </Col>
      </Row>
      
      <Row>
        <Col lg={12}>
          <SummarySection>
            <h3>Resumo Anual</h3>
            <p>
              Este relatório apresenta os resultados financeiros da empresa durante o ano de 2023, 
              destacando os lucros obtidos em cada mês e a tendência geral da operação.
            </p>
            
            <ul>
              <li>O lucro total anual foi de {totalProfit.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</li>
              <li>Observamos um crescimento consistente nos lucros ao longo do ano</li>
              <li>O último trimestre apresentou os melhores resultados</li>
              <li>As despesas foram mantidas sob controle, mesmo com o aumento das receitas</li>
              <li>
                Recomendações: Continuar com a estratégia atual de gestão financeira, focando na 
                expansão das receitas enquanto mantém o controle efetivo das despesas.
              </li>
            </ul>
          </SummarySection>
        </Col>
      </Row>
    </ReportContainer>
  );
};

export default FinancialReport;