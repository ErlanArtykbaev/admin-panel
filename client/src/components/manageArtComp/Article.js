import React from 'react'

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
        <button className="edit-button">edit</button>
        <button className="delete-button">delete</button>
      </div>
    </div>
  )
}

export default Article