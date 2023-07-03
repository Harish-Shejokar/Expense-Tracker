import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import Login from "../Components/Authentication/Login";
import { useSelector } from 'react-redux';
const PrivateRoute = ({Component,...rest}) => {
   const loginStatus = useSelector(
  (state) => state.authentication.isAuthenticated
);

    return (
        <Route >
            {loginStatus ? <Component /> : <Login />}
        </Route>
      
  )
}

export default PrivateRoute
