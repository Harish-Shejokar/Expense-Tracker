import React, { useContext } from "react";
import Header from "./Components/Header/Header";
import SignUp from "./Components/Authentication/SignUp";
import Login from "./Components/Authentication/Login";
import { Route,Switch,Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./Pages/HomePage/Home";
import UserDetails from "./Components/Authentication/UserDetails/UserDetails";
import PasswordReset from "./Components/Authentication/PasswordReset";
import CreateAuth from "./Store/AuthContext/Create-Auth";
import PrivateRoute from "./Routes/PrivateRoute";
import PublicRoute from "./Routes/PublicRoute";
import './App.css';

function App() {
  const AuthCtx = useContext(CreateAuth);
  console.log(AuthCtx.isLoggedIn);

  return (
    <div className="App">
      <Header />
      <Switch>
        <PrivateRoute path="/" Component={Home}/>
        <PublicRoute path="/signup" Component={SignUp} />
        <PublicRoute path="/login" Component={Login} />
        <PublicRoute path="/resetPassword" Component={PasswordReset} />
        <PrivateRoute path="/home" Component={Home} />
        <PrivateRoute path="/userdetails" Component={UserDetails} />
      </Switch>
    </div>
  );
}

export default App;
