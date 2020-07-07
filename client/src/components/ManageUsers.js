import React from 'react'

import Header from './Header'
import User from './manageUsrComp/User'

import '../css/Users.css'


const ManageUsers = () => {
  return(
    <>
      <Header
        title="Manage Users"
      ></Header>
      <div className="ManagUsr-main">
        <User 
          name="erlan.artykbaev"
        />
        <User 
          name="just.haker7"
        />
        <User 
          name="dordoipalza"
        />
        <User 
          name="mobilesetting"
        />
      </div>
      <div className="ManagUsr-create-button">create user</div>
      
    </>
  )
}

export default ManageUsers