import React, { useState } from 'react'

import '../css/LogInOut.css'

import Header from './Header'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const Register = (props) => {

  const [id, setId] = useState(0)
  const [username, setUsername] = useState("username")
  const [password, setPassword] = useState("password")

  
  const addUser = (username, password) => {
    
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => {
      let maxId = json[json.length - 1].id + 1
      setId(maxId)
    })

    Axios({
      method: 'POST',
      url: 'http://localhost:3000/users',
      data: {
        id: id,
        username: username,
        password: password
      },
      validateStatus: (status) => {
        return true; // I'm always returning true, you may want to do it depending on the status received
      }
    })
    .then(res => {
      console.log(res)
    })
    .then(err => {
      console.log(err)
    })
  }
  
  const updateInputName = (e) => {
    setUsername(e)
  }

  const updateInputPass = (e) => {
    setPassword(e)
  }

  return(
    <>
      <Header
        title="Register"
      />
      <div className="Register">
        <form>
          <label htmlFor="name">username:</label>
          <input 
            placeholder="username" 
            id="name" 
            type="text" 
            name="name"
            value={username}
            onChange={(e) => updateInputName(e.target.value)}
          />
          <label htmlFor="name">password:</label>
          <input 
            placeholder="password" 
            id="password" 
            type="text" 
            name="password"
            value={password}
            onChange={(e) => updateInputPass(e.target.value)}
          />
          <Link to="/">
            <button  
              className="Register-button" 
              onClick={() => addUser(username, password)}
            >
              register
            </button>
          </Link>
        </form>
      </div>
    </>
    
  )
}

export default Register