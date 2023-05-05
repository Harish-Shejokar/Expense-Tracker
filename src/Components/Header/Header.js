import React, { } from 'react'
import { Navbar, Nav, Container,Button,Form} from "react-bootstrap";
import { useHistory,Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { authAction } from '../../ReduxStore/Auth';
  
const Header = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.authentication.isAuthenticated);
  const history = useHistory();
  const logOutHandler = () => {
    dispatch(authAction.isLogin());
    history.replace('/login')
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    
  }

  const switchToDarkTheme = () => { 
    console.log("dark theme")
  }


  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/home" style={{ color: "cyan", textDecoration: "none" }}>
            Expense-Tracker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {loginStatus && (
              <Button
                type="button"
                variant="light"
                onClick={logOutHandler}
                size="sm"
              >
                LogOut
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Theme"
        onClick={switchToDarkTheme}

      />
    </Navbar>
  );
}

export default Header
