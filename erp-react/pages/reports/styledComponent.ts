import styled from 'styled-components';
import { Card, Container, Table } from 'react-bootstrap';

export const ReportContainer = styled(Container)`
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

export const ReportHeader = styled.div`
  margin-bottom: 2rem;
  
  h1 {
    font-size: 2rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #6c757d;
    font-size: 1rem;
  }
`;

export const SummaryCard = styled(Card)`
  border-radius: 12px;
  border: none;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
  margin-bottom: 2rem;
  
  .card-body {
    padding: 1.5rem;
  }
`;

export const TotalProfitCard = styled(SummaryCard)`
  border-left: 4px solid #4e73df;
`;

export const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #5a5c69;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const ProfitValue = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2e3a59;
  margin-bottom: 1.5rem;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.35rem 0.75rem;
  background-color: #d1e7dd;
  color: #0f5132;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  
  svg {
    margin-right: 0.5rem;
  }
`;

export const ReportTable = styled(Table)`
  margin-top: 2rem;
  
  thead th {
    background-color: #f8f9fc;
    color: #5a5c69;
    font-weight: 600;
    border-bottom: 1px solid #e3e6f0;
  }
  
  tbody td {
    vertical-align: middle;
  }
`;

export const ProfitCell = styled.td<{ positive: boolean }>`
  color: ${props => props.positive ? '#1cc88a' : '#e74a3b'};
  font-weight: 500;
`;

export const SummarySection = styled.div`
  background-color: #f8f9fc;
  border-radius: 12px;
  padding: 1.5rem;
  margin-top: 2rem;
  
  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2e3a59;
    margin-bottom: 1rem;
  }
  
  ul {
    padding-left: 1.5rem;
  }
  
  li {
    margin-bottom: 0.5rem;
  }
`;