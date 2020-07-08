import React from 'react'
import { Link } from 'react-router-dom'

const Article = (props) => {
  return(
    <div className="Article">
      <div className="Article-main">
        <img alt="" src={props.img}></img>
        <h2>{props.title}</h2>
        <p> {props.description} </p>
        <p className="Article-author"> {props.author} </p>
      </div>
      <div className="Article-buttons">
        <Link to="/articleEdit" className="edit-button">edit</Link>
        <Link to="/" className="delete-button">delete</Link>
      </div>
    </div>
  )
}

export default Article