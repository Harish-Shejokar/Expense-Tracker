import React from 'react'
import CreateAuth from './Create-Auth'

const AuthProvider = (props) => {

    const context = {
        isLoggedIn: localStorage.getItem("email") === null ? false : true,
        
    };

  return (
    <CreateAuth.Provider value={context}>
      {props.children}
    </CreateAuth.Provider>
  )
}

export default AuthProvider
