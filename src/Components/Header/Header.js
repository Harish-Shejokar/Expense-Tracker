import React, { useContext } from 'react'
import { Navbar, Nav, Container,Button} from "react-bootstrap";
import { useHistory,Link } from 'react-router-dom';
import CreateAuth from '../../Store/AuthContext/Create-Auth';
  
const Header = () => {
  const AuthCtx = useContext(CreateAuth);
  const history = useHistory();
  const logOutHandler = () => {
    history.replace('/login')
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    window.location.reload(false);
  }


  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand >
          <Link to="/home" style={{color:"white",textDecoration:"none"}}>Expense-Tracker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {AuthCtx.isLoggedIn && <Button
              type="button"
              variant="light"
              onClick={logOutHandler}
              size="sm"
            >
              LogOut
            </Button>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header
