import React from "react";
import { Navbar, Nav, Container, Button, Form } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authAction } from "../../ReduxStore/Auth";
import { themeAction } from "../../ReduxStore/Theme";
import { expenseAction } from "../../ReduxStore/Expense";

const Header = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(
    (state) => state.authentication.isAuthenticated
  );
  const subscription = useSelector(state => state.expense.subscription);
  console.log(subscription);
  const history = useHistory();
  const theme = useSelector((state) => state.theme.currTheme);
  const logOutHandler = () => {
    dispatch(authAction.isLogin());
    dispatch(themeAction.logoutTheme());
    dispatch(expenseAction.resetRedux());
    history.replace("/login");
    localStorage.clear();
  };

  const switchToDarkTheme = () => {
    // console.log("dark theme")
    dispatch(themeAction.switchTheme());
    if (localStorage.getItem("theme") === "darkTheme")
      localStorage.setItem("theme", "ligthTheme");
    else localStorage.setItem("theme", "darkTheme");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Navbar.Brand>
            <Link to="/home" style={{ color: "Cyan", textDecoration: "none" }}>
              Home
            </Link>
          </Navbar.Brand>
          <Navbar.Brand>
            <Link
              to="/userdetails"
              style={{ color: "Cyan", textDecoration: "none" }}
            >
              Profile
            </Link>
          </Navbar.Brand>

          {/* <Nav className="me-auto"> */}
          {loginStatus && (
            <Button
              className="fw-bold"
              type="button"
              variant="outline-info"
              onClick={logOutHandler}
              size="sm"
            >
              LogOut
            </Button>
          )}
          {/* </Nav> */}
          <Nav>
            {loginStatus && subscription && (
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label=""
                variant="info"
                onClick={switchToDarkTheme}
                defaultChecked={theme === "darkTheme"}
              />
            )}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      <div className="border border-2 border-info"></div>
    </>
  );
};

export default Header;
