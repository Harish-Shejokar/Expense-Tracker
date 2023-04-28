import React from "react";
import Header from "./Components/Header/Header";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
import PasswordReset from "./Components/Authentication/passwordReset";

function App() {
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
        <Route path="/home" exact>
          <Home />
        </Route>
        <Route path="/userdetails">
          <UserDetails />
        </Route>
        <Route path="/resetPassword">
          <PasswordReset />
        </Route>
      </Switch>
    </>
  );
}

export default App;
