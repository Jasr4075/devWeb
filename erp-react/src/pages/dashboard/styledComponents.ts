import { keyframes } from 'styled-components';
import styled from 'styled-components';
import { Card, Container, Row, ToggleButton } from 'react-bootstrap';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

// Styled Components mejorados
export const DashboardContainer = styled(Container)`
  padding: 2rem 0;
  font-family: 'Inter', sans-serif;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 0.6s ease-out;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 0.5rem;
  }

  .subtitle {
    color: #6c757d;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export const StatsGrid = styled(Row)`
  gap: 1.5rem 0;
  margin-bottom: 2.5rem;
`;

export interface StyledCardProps {
  $color: string;
}

export const StyledCard = styled(Card) <StyledCardProps>`
  border-radius: 12px;
  border: none;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  border-left: 4px solid ${props => props.$color};
  animation: ${fadeIn} 0.6s ease-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1.5rem 0 rgba(58, 59, 69, 0.2);
  }
`;

export const CardTitle = styled(Card.Title)`
  font-size: 0.9rem;
  font-weight: 600;
  color: #5a5c69;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.75rem;
`;

export const CardValue = styled(Card.Text)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #2e3a59;
  margin-bottom: 1.5rem;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export interface IconContainerProps {
  $color: string;
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${props => props.$color}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$color};
  margin-right: 1rem;
`;

export interface ChangeTextProps {
  $positive?: number; // Change prop type to number
}

export const ChangeText = styled.span<ChangeTextProps>`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.$positive !== undefined && props.$positive > 0 ? '#1cc88a' : '#e74a3b'}; // Access the number value

  svg {
    margin-left: 4px;
  }
`;

export const CardDescription = styled(Card.Text)`
  color: #858796;
  font-size: 0.85rem;
  margin-top: 0.5rem;
`;

export const MainCard = styled(Card)`
  border-radius: 12px;
  border: none;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.1);
  margin-top: 1.5rem;
  animation: ${fadeIn} 0.6s ease-out 0.2s both;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2e3a59;
    margin-bottom: 0.25rem;
  }

  p {
    color: #6c757d;
    font-size: 0.95rem;
    margin-bottom: 0;
  }
`;

interface StyledToggleButtonProps {
  $active: boolean;
}

export const StyledToggleButton = styled(ToggleButton) <StyledToggleButtonProps>`
  border-radius: 8px !important;
  padding: 0.5rem 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid #d1d3e2 !important;
  color: ${props => props.$active ? '#fff' : '#6e707e'};
  background-color: ${props => props.$active ? '#4e73df' : 'transparent'} !important;

  &:hover {
    background-color: ${props => props.$active ? '#4e73df' : '#f8f9fc'} !important;
    color: ${props => props.$active ? '#fff' : '#4e73df'};
  }

  &:focus {
    box-shadow: none;
  }
`;

export const ChartContainer = styled.div`
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  border: 1px solid #e3e6f0;
`;