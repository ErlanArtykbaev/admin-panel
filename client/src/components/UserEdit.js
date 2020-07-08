import React from 'react'
import Header from './Header'

const UserEdit = (props) => {
  return(
    <>
      <Header
        title="User Edit"
      />
      <div className="UserEdit">
        <form>
          <label for="name">name:</label>
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
          <input className="UserEdit-save-button" type="submit" value="save" />
        </form>
      </div>
    </>
    
  )
}

export default UserEdit