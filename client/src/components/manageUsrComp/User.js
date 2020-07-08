import React from 'react'
import { Link } from 'react-router-dom'

const User = (props) => {
  return(
    <div className="User">
      <div className="User-main">
        <p className="User-name">{props.name} </p>
      </div>
      <div className="User-buttons">
        <Link to="/userEdit" className="edit-button" >edit</Link>
        <Link to="/" className="delete-button">delete</Link>
      </div>
    </div>
  )
}

export default User