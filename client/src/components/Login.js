import React from 'react'

import '../css/LogInOut.css'

import Header from './Header'

const Login = (props) => {
  return(
    <>
      <Header
        title="Log in"
      />
      <div className="Login">
        <form>
          <label for="name">username:</label>
          <input 
            placeholder="username" 
            id="name" 
            type="text" 
            name="name"
          />
          <label for="name">password:</label>
          <input 
            placeholder="password" 
            id="password" 
            type="password" 
            name="password"
          />
          <input className="Login-button" type="submit" value="log in" />
        </form>
      </div>
    </>
    
  )
}

export default Login