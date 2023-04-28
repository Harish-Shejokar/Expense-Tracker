import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link,useHistory } from 'react-router-dom';
  
const Header = () => {
  const history = useHistory();
  const logOutHandler = () => {
    history.replace('/login')
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
            Expense-Tracker
          </Link>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Products</Nav.Link>
          <Nav.Link href="#pricing">AboutUs</Nav.Link>
           <Button onClick={logOutHandler} variant="light" size="sm">
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header
