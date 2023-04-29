import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
import PasswordReset from "./Components/Authentication/PasswordReset";
import CreateAuth from "./Store/AuthContext/Create-Auth";

function App() {
  const AuthCtx = useContext(CreateAuth);
  console.log(AuthCtx.isLoggedIn);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        {AuthCtx.isLoggedIn && (
          <Route path="/home" exact>
            <Home />
          </Route>
        )}
        {AuthCtx.isLoggedIn && (
          <Route path="/userdetails">
            <UserDetails />
          </Route>
        )}
        <Route path="/resetPassword">
          <PasswordReset />
        </Route>
      </Switch>
    </>
  );
}

export default App;
