import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'

import Header from './Header'
import User from './manageUsrComp/User'

import '../css/Users.css'


const ManageUsers = () => {

  const[users, setUsers] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUsers()
    }, 1500)
    return () => clearTimeout(timer)
  },[])

  const fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json)
    })
  }


  if(!users){
    return <div>loading</div>
  }else{
    return(
      <>
        <Header
          title="Manage Users"
        ></Header>
        <div className="ManagUsr-main">

          {
            users.map( user => (
              <User 
                key={user.id}
                userId={user.id}
                username={user.username}
                password={user.password}
              />
            ))
          }
        </div>
        <NavLink to="/register" className="ManagUsr-create-button">create user</NavLink>   
      </>
    )
  }
}

export default ManageUsers