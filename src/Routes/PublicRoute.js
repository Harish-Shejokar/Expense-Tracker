import React, { } from 'react'
import {Route} from 'react-router-dom'

const PublicRoute = ({ Component:Component,...rest}) => {
  return <Route {...rest} render={(props) => <Component />} />;
};

export default PublicRoute
