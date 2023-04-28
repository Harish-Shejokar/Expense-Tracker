import React from 'react'
import { Navbar, Nav, Container,Button} from "react-bootstrap";
import { useHistory } from 'react-router-dom';
  
const Header = () => {
  const history = useHistory();
  const logOutHandler = () => {
    history.replace('/login')
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }


  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="#home">Expense-Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Button type="button" variant='light' onClick={logOutHandler} size="sm">LogOut</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
