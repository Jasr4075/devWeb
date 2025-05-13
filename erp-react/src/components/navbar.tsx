import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Sidebar from './ui/sidebar';


const NavbarBrand = styled(Navbar.Brand)`
  font-weight: 700;
  font-size: 1.5rem;
  color: #6e8efb !important;
`;

interface NavbarProps {
  onLoginClick?: () => void;
  onSignUpClick?: () => void;
}

const NavbarComponent: React.FC<NavbarProps> = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Sidebar toggleButtonPosition="bottom-left" toggleButtonStyle="light" />

      <Container>
        <NavbarBrand href="/">ERP Cloud</NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Button 
              variant="primary" 
              className="ms-2"
              onClick={() => window.location.href = '/login'}
            >
              Entrar
            </Button>
            <Button 
              variant="outline-primary" 
              className="ms-2"
              onClick={() => window.location.href = '/register'}
            >
              Cadastrar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;