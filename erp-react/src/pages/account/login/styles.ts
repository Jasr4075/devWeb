import styled from "styled-components";
import { Form, Card } from "react-bootstrap";


export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
`;

export const StyledCard = styled(Card)`
  max-width: 400px;
  width: 100%;
  border: none;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledForm = styled(Form)`
  .form-label {
    font-weight: 500;
  }
  .form-control {
    border-radius: 8px;
    padding: 10px;
  }
`;