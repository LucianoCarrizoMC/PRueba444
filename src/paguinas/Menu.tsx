import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

interface MenuProps {
  setPage: (page: string) => void;
}

const Menu: React.FC<MenuProps> = ({ setPage }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Registro de Estrellas</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => setPage('register')}>Registrar Estrella</Nav.Link>
        <Nav.Link onClick={() => setPage('view')}>Ver Estrellas</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Menu;
