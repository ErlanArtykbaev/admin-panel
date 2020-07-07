import React from 'react'

const User = (props) => {
  return(
    <div className="User">
      <div className="User-main">
        <p className="User-name">{props.name} </p>
      </div>
      <div className="User-buttons">
        <button className="edit-button">edit</button>
        <button className="delete-button">delete</button>
      </div>
    </div>
  )
}

export default User