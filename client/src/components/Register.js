import React from 'react'

import '../css/LogInOut.css'

import Header from './Header'

const Register = (props) => {
  return(
    <>
      <Header
        title="Register"
      />
      <div className="Register">
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
          <input className="Register-button" type="submit" value="register" />
        </form>
      </div>
    </>
    
  )
}

export default Register