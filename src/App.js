import React from "react";
import Header from "./Components/Header/Header";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route,Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";

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
      </Switch>
    </>
  );
}

export default App;
