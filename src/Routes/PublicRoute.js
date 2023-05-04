import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import CreateAuth from '../Store/AuthContext/Create-Auth';
import Error from '../Pages/ErrorPage/Error';

const PublicRoute = ({ Component, ...rest }) => {
  const AuthCtx = useContext(CreateAuth);

  return <Route {...rest}>
    {!AuthCtx.isLoggedIn ? <Component /> : <Error />}
  </Route>;
};

export default PublicRoute
