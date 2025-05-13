import React, { useState } from 'react';
import styled from 'styled-components';
import { Nav, Button } from 'react-bootstrap';
import { 
  Speedometer2, 
  FileText, 
  X,
  List
} from 'react-bootstrap-icons';

// Tipos para las props
interface SidebarProps {
  toggleButtonPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  toggleButtonStyle?: 'primary' | 'secondary' | 'light' | 'dark';
}

// Styled Components con tipos
const SidebarWrapper = styled.div`
  position: relative;
`;

const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 280px;
  background-color: #fff;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);
  z-index: 1000;
  transition: transform 0.3s ease;
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(-280px)'};
`;

const SidebarHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const SidebarBrand = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  color: #6e8efb;
  flex-grow: 1;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #6c757d;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  
  &:hover {
    color: #2e3a59;
  }
`;

const SidebarNav = styled(Nav)`
  padding: 1.5rem;
  
  .nav-link {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    color: #5a5c69;
    margin-bottom: 0.5rem;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #f8f9fc;
      color: #4e73df;
    }
    
    &.active {
      background-color: #f0f4ff;
      color: #4e73df;
      font-weight: 600;
    }
    
    svg {
      margin-right: 0.75rem;
      font-size: 1.1rem;
    }
  }
`;

const ToggleButton = styled(Button)<{ 
  $position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}>`
  position: fixed;
  z-index: 999;
  ${props => props.$position.includes('top') ? 'top: 20px;' : 'bottom: 20px;'}
  ${props => props.$position.includes('left') ? 'left: 20px;' : 'right: 20px;'}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(33, 40, 50, 0.15);
`;

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

// Componente Sidebar
const Sidebar: React.FC<SidebarProps> = ({ 
  toggleButtonPosition = 'top-left',
  toggleButtonStyle = 'primary'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarWrapper>
      {/* Botón para abrir el sidebar */}
      <ToggleButton 
        variant={toggleButtonStyle}
        onClick={toggleSidebar}
        $position={toggleButtonPosition}
        aria-label="Toggle sidebar"
      >
        <List size={20} />
      </ToggleButton>

      {/* Overlay para cerrar el sidebar al hacer clic fuera */}
      <Overlay 
        $isOpen={isOpen} 
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <SidebarContainer $isOpen={isOpen}>
        <SidebarHeader>
          <SidebarBrand>ERP Cloud</SidebarBrand>
          <CloseButton onClick={toggleSidebar}>
            <X />
          </CloseButton>
        </SidebarHeader>
        <SidebarNav defaultActiveKey="/dashboard" className="flex-column">
          <Nav.Link href="/dashboard">
            <Speedometer2 /> Dashboard
          </Nav.Link>
          <Nav.Link href="/reports">
            <FileText /> Relatórios
          </Nav.Link>
        </SidebarNav>
      </SidebarContainer>
    </SidebarWrapper>
  );
};

export default Sidebar;