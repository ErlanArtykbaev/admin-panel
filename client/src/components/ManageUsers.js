import React, { useState, useEffect } from 'react'

import Header from './Header'
import User from './manageUsrComp/User'

import '../css/Users.css'


const ManageUsers = () => {

  const[users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(json => {
      setUsers(json)
    })
  })


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
                name={user.username}
              />
            ))
          }
        </div>
        <div className="ManagUsr-create-button">create user</div>   
      </>
    )
  }
}

export default ManageUsers