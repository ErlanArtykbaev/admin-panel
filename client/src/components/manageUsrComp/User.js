import React from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'

const User = (props) => {

  const userDelete = (id) => {
    Axios.delete(`http://localhost:3000/users/${id}`)
    .then(res => {
      console.log(res)
    })
    .then(err => {
      console.log(err)
    })
  }

  return(
    <div className="User">
      <div className="User-main">
        <p className="User-name">{props.name}{props.userId} </p>
      </div>
      <div className="User-buttons">
        <Link to="/userEdit" className="edit-button" >edit</Link>
        <Link to="/" onClick={() => userDelete(props.userId)} className="delete-button">delete</Link>
      </div>
    </div>
  )
}

export default User