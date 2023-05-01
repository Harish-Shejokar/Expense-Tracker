import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import CreateAuth from '../Store/AuthContext/Create-Auth';
import Login from "../Components/Authentication/Login";

const PrivateRoute = ({Component,...rest}) => {
    const AuthCtx = useContext(CreateAuth);
    // console.log(Component,rest,"skdjf")
    console.log(AuthCtx.isLoggedIn)
    return (
        <Route {...rest}>
            {AuthCtx.isLoggedIn ? <Component /> : <Login />}
        </Route>
      
  )
}

export default PrivateRoute
