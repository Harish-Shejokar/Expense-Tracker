import React from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Expense-Tracker</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
          <Nav.Link href="#pricing">AboutUs</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header
