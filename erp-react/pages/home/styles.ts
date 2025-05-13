import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const HeroSection = styled.section`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  color: white;
  padding: 5rem 0;
  margin-bottom: 3rem;
`;

export const FeatureCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6e8efb;
`;

export const FooterSection = styled.footer`
  background-color: #343a40;
  color: white;
  padding: 2rem 0;
  margin-top: 3rem;
`;
